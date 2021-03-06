import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image, Linking, Animated } from 'react-native';
import { connect } from 'react-redux';
import { getTracks } from '../actions/spotify';
import { AppContainer, Spinner } from '../components/common';
import { colors } from '../styles/colors';

class Tracks extends Component {
    state = {
        isLoading: true,
        animatedValue: new Animated.Value(0),
    }

    constructor(props) {
        super(props)
        this.delayValue = 800;
    }

    componentDidMount() {
        this.setAnimation()
    }

    setAnimation = () => {
        Animated.spring(this.state.animatedValue, {
            toValue: 1,
            tension: 20,
            useNativeDriver: true
        }).start();
    }

    componentWillMount() {
        console.log(this.props.tracksURL)
        this.props.getTracks(this.props.tracksURL, this.props.token)
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            animatedValue: new Animated.Value(0)
        }, () => {
            this.setAnimation()
        })
    }

    openTrack = URL => () => {
        Linking.openURL(URL)
    };

    renderOption = ({ item, index }) => {
        this.delayValue = this.delayValue + 500;
        const translateX = this.state.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [this.delayValue, 1]
        });
        return (
            <Animated.View style={{ transform: [{ translateX }] }}>
                <TouchableOpacity key={`${item.track.id}_${item.added_at}`} style={styles.buttonStyle} onPress={this.openTrack(item.track.external_urls.spotify)}>
                    <Image style={styles.image} source={{ uri: item.track.album.images[1].url }} />
                    <Text style={styles.textOption}>{item.track.name}</Text>
                    <Text style={styles.textOption}>{item.track.artists[0].name}</Text>
                </TouchableOpacity>
            </Animated.View>
        );
    };

    renderList = () => {
        const { tracks, gotTracks } = this.props
        if (gotTracks) {
            <FlatList
                contentContainerStyle={styles.listContent}
                data={tracks}
                keyExtractor={(item, index) => {
                    return `${item.track.id}_${item.added_at}`
                }}
                renderItem={this.renderOption}
            />
        } else {
            <Spinner />
        }
    }

    render() {
        const { playlist, tracks } = this.props
        return (
            <AppContainer
                containerBackgroundColor={colors.cadetBlue}
                headerText=""
                showBackArrow={true}
                headerTextColor={colors.alabasterWhite}
                navigation={this.props.navigation}
            >
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                        <Text style={styles.title}>{playlist.name}</Text>
                        <Image style={styles.mainImage} source={{ uri: playlist.images[0].url }} />
                    </View>

                    <FlatList
                        contentContainerStyle={styles.listContent}
                        data={tracks}
                        keyExtractor={(item, index) => {
                            return `${item.track.id}_${item.added_at}`
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
        gotTracks: state.spotify.gotTracks,
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
        width: 250
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
    mainImage: {
        height: 100,
        width: 100,
        borderRadius: 10,
    },
    image: {
        height: 220,
        marginBottom: 20,
        overflow: 'hidden'
    }
});

