import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const categoriesListItem = ({ item }) => (
<View style={styles.categories_list_item}>
<Image
    style={styles.category_img}
    source={{uri: item.category_img}}
    />
<Text style={styles.category_title}>{item.category_title}</Text>
<Image
    style={styles.right_arrow}
    source={{uri: item.right_arrow}}
   />
</View>
  );

const CategoriesList = ({ item }) => (
<FlatList
    style={styles.categories_list}
    data={item}
    renderItem={categoriesListItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
);

export default CategoriesList;

const styles = StyleSheet.create({
    'category_img': {
        'width': '8vw',
        'height': '8vw',
        'marginTop': 5,
        'marginLeft': 10
    },
    'category_title': {
        'color': '#060505',
        'fontSize': 15,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'right_arrow': {
        'width': '2vw',
        'height': '2vw',
        'margin': 10
    }
});