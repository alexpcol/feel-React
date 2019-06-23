import React, { Component } from 'react'
import { View, Image, ActivityIndicator, Dimensions, Platform } from 'react-native'
import { FileSystem } from 'expo'
class CachedImage extends Component {
    state = {
        loading: true,
        failed: false,
        imguri: '',
        width: 300,
        height: 300
    }
    async componentDidMount() {
        const extension = this.props.source.slice((this.props.source.lastIndexOf(".") - 1 >>> 0) + 2);
        const name = this.props.source.slice((this.props.source.lastIndexOf("/") - 1 >>> 0) + 2, - (extension.length + 1));
        if ((extension.toLowerCase() !== 'jpg') && (extension.toLowerCase() !== 'png') && (extension.toLowerCase() !== 'gif') && (extension.toLowerCase() !== 'jpeg')) {
            this.setState({ loading: false, failed: true })
        }
        await FileSystem.downloadAsync(
            this.props.source,
            `${FileSystem.cacheDirectory + name}.${extension}`
        )
            .then(({ uri }) => {
                this.loadLocal(Platform.OS === 'ios' ? uri : this.props.source);
            })
            .catch(e => {
                console.log('Image loading error:', e);
                this.loadLocal(`${FileSystem.cacheDirectory + this.props.title}.${extension}`);
            });
    }
    loadLocal(uri) {
        Image.getSize(uri, (width, height) => {
            this.setState({ imguri: uri, loading: false, width: Dimensions.get('window').width, height: (height / width) * Dimensions.get('window').width });
        }, (e) => {
            // As always include an error fallback
            console.log('getSize error:', e);
            this.setState({ loading: false, failed: true })
        })
    }
    render() {
        const { style } = this.props
        {
            if (this.state.loading) {
                return (
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <ActivityIndicator
                            color='#42C2F3'
                            size='large'
                        />
                    </View>
                );
            }
        }
        {
            if (this.state.failed) {
                return (<View></View>);
            }
        }
        return (
            <Image
                style={style}
                source={{ uri: this.state.imguri }}
            />
        );
    }
}
export default CachedImage;