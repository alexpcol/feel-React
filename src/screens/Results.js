import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import { connect } from 'react-redux';
import { searchPlaylist, playlistSelected } from '../actions/spotify';
import { AppContainer, Spinner } from '../components/common';
import { colors } from '../styles/colors';

class Results extends Component {
    state = {
        isLoading: false,
        emotions: []
    }

    componentWillMount() {
        const strongestEmotion = this.getStrongestEmotion()
        this.props.searchPlaylist(strongestEmotion.name, this.props.token)
    }

    getStrongestEmotion() {
        const realEmotions = this.prepareData()
        var strongestEmotion = realEmotions[0]
        for (var emotion of realEmotions) {
            if (strongestEmotion.count < emotion.count) {
                strongestEmotion = emotion
            }
        }
        if (strongestEmotion.count > 1) {
            return (strongestEmotion)
        } else {
            for (var emotion of realEmotions) {
                if (strongestEmotion.value < emotion.value) {
                    strongestEmotion = emotion
                }
            }
            return (strongestEmotion)
        }
    }

    prepareData = () => {
        const { emotions } = this.props
        var count = {};
        const realEmotions = emotions.map(emotion => {
            let object;
            for (var key in emotion) {
                console.log(key)
                object = {
                    name: key,
                    value: emotion[key],
                    count: count[key] = (count[key] || 0) + 1
                }
            }
            return object
        });
        return (realEmotions)
    }

    setPlaylist = item => () => {
        this.props.playlistSelected(item)
    };

    componentWillReceiveProps(nextProps) {
        if(nextProps.playlistChosen) {
            this.props.navigation.navigate('TracksScreen')
        }
    }

    renderOption = ({ item, index }) => {
        return (
            <TouchableOpacity key={item.id} style={styles.buttonStyle} onPress={this.setPlaylist(item)}>
                <Image style={styles.image} source={{ uri: item.images[0].url }} />
                <Text style={styles.textOption}>{item.name}</Text>
            </TouchableOpacity>
        );
    };

    render() {
        const { playlists } = this.props
        return (
            <AppContainer
                containerBackgroundColor={colors.cadetBlue}
                headerText=""
                headerTextColor={colors.alabasterWhite}
                navigation={this.props.navigation}
            >
                <View style={{ flex: 1 }}>
                    <Text style={styles.title}>This are some playlists for you based on your answers</Text>
                    <FlatList
                        contentContainerStyle={styles.listContent}
                        data={playlists}
                        keyExtractor={(item, index) => {
                            return item.id
                        }}
                        renderItem={this.renderOption}
                    />
                </View>
            </AppContainer>
        );
    }
}

function mapStateToProps(state) {
    return {
        emotions: state.survey.emotions,
        playlists: state.spotify.playlists,
        token: state.auth.token,
        playlistChosen: state.spotify.playlistSelected
    };
}
export default connect(mapStateToProps, {
    searchPlaylist,
    playlistSelected
})(Results);

const styles = StyleSheet.create({
    title: {
        color: colors.alabasterWhite,
        fontWeight: 'bold',
        fontSize: 40,
    },
    buttonStyle: {
        backgroundColor: colors.alabasterWhite,
        borderRadius: 10,
        marginTop: 30,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.2,
    },
    textOption: {
        color: colors.eastBay,
        fontWeight: '600',
        fontSize: 22,
        marginBottom: 10,
        textAlign: 'center'
    },
    listContent: {
        paddingVertical: 8
    },
    image: {
        height: 220,
        marginBottom: 20,
        overflow: 'hidden'
    }
});

