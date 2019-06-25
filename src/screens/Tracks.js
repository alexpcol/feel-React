import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import { connect } from 'react-redux';
import { getTracks } from '../actions/spotify';
import { AppContainer, Spinner } from '../components/common';
import { colors } from '../styles/colors';

class Tracks extends Component {
    state = {
        isLoading: false,
        emotions: []
    }

    componentWillMount() {
        console.log(this.props.tracksURL)
        this.props.getTracks(this.props.tracksURL, this.props.token)
    }

    renderOption = ({ item, index }) => {
        return (
            <TouchableOpacity key={index} style={styles.buttonStyle}>
                <Image style={styles.image} source={{ uri: item.track.album.images[1].url }} />
                <Text style={styles.textOption}>{item.track.name}</Text>
            </TouchableOpacity>
        );
    };

    render() {
        const { playlist, tracks } = this.props
        return (
            <AppContainer
                containerBackgroundColor={colors.cadetBlue}
                headerText=""
                headerTextColor={colors.alabasterWhite}
                navigation={this.props.navigation}
            >
                <View style={{ flex: 1 }}>
                    <Text style={styles.title}>{playlist.name}</Text>
                    <FlatList
                        contentContainerStyle={styles.listContent}
                        data={tracks}
                        keyExtractor={(item, index) => {
                            return item
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
        playlist: state.spotify.playlistSelected,
        tracksURL: state.spotify.playlistSelected.tracks.href,
        tracks: state.spotify.tracks,
        token: state.auth.token,
    };
}
export default connect(mapStateToProps, {
    getTracks,
})(Tracks);

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
        overflow: 'hidden'
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

