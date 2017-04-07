import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Card from './common/Card';
import CardSection from './common/CardSection';

class ListItem extends Component {

	renderDescription(){
		if(this.props.library.id === this.props.selectedLibraryId){
			return(
				<CardSection>
					<Text style={styles.descriptionStyle}>{this.props.library.description}</Text>
				</CardSection>
			)
		}
	}

	render(){
		console.log('TESTING' + this.props.selectLibraryId)
		return(
			<Card>
				<TouchableWithoutFeedback
					onPress={() => this.props.selectLibrary(this.props.library.id)}
				>
					<View>
						<CardSection>
							<Text style={styles.titleStyle}>{this.props.library.title}</Text>
						</CardSection>
						{this.renderDescription()}
					</View>
				</TouchableWithoutFeedback>
			</Card>
		)
	}
}

const styles = StyleSheet.create({
	titleStyle: {
		padding: 5,
		fontSize: 18,
		fontWeight: 'bold'
	},
	descriptionStyle: {
		padding: 5
	}
});

const mapStateToProps = state => {
	return { selectedLibraryId: state.selectedLibraryId }
}

export default connect(mapStateToProps, actions)(ListItem);