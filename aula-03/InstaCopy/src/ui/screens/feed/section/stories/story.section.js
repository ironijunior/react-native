import React, { Component } from 'react'

import { ScrollView, View, Image, Text } from 'react-native'

import styles from './story.style'

import { DogService } from '@service/dog'

export class StorySection extends Component {

    constructor(props) {
        super(props)

        this.dogService = new DogService()

        this.state = {
            stories : []
        }
    }

    componentDidMount() {
        let stories = [...this.state.stories]
        this.dogService.getRandomImage(5).then(resp => {
            resp.message.forEach(dog => {
                stories.push({ name: 'teste', image: dog })
            })
            this.setState({ stories })
        })
        
    }

    _renderImageStory = (story, key) => (
        <View key={key} style={styles.story}>
            <Image key={key} style={{ width: 70, height: 70, borderRadius: 50, borderWidth: 1, borderColor: 'orange' }}
                source={{uri: story.image }} />
            <Text style={{color: 'black', fontSize: 14}}>{ story.name }</Text>
        </View>
    )

    render() {
        return (
            <View>
                <ScrollView horizontal={true}
                    contentContainerStyle={styles.storyContainer}>
                    
                    {
                        this.state.stories.map(this._renderImageStory)
                    }

                </ScrollView>
            </View>
            
        )
    }
}