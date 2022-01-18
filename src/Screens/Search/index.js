import React from 'react';
import { Text, View, SafeAreaView, ScrollView, Image, TextInput, FlatList, ImageBackground } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const Search = () => {

    const dummy = [
        { img1: require('../../../ios/Assets/PIZZA.png'), var: 'pizza' },
        { img1: require('../../../ios/Assets/CHICKEN.png'), var: 'chicken' },
        { img1: require('../../../ios/Assets/BURGER.png'), var: 'burger' },
        { img1: require('../../../ios/Assets/SOUP.png'), var: 'soup' },

    ]
    const dummy1 = [
        { img2: require('../../../ios/Assets/searchpics11.png'), var2: 'Chicken fillet', var3: '$25', img3: require('../../../ios/Assets/Stars.png') },
        { img2: require('../../../ios/Assets/searchpics11.png'), var2: 'Chicken fillet', var3: '$25', img3: require('../../../ios/Assets/Stars.png') },
        { img2: require('../../../ios/Assets/searchpics11.png'), var2: 'Chicken fillet', var3: '$25', img3: require('../../../ios/Assets/Stars.png') },
    ]


    return (
        <SafeAreaView>
            <ScrollView>
                <View>

                    <Text style={{ color: 'gray', fontSize: 14, paddingLeft: 30, paddingTop: 10 }}>Hi, jimmy</Text>


                    <View style={{ width: wp(85), height: 70, backgroundColor: 'transparent', alignSelf: 'center', marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ width: wp(60), height: 65, backgroundColor: 'transparent' }}>
                            <Text style={{ fontSize: 24 }}>What do you</Text>
                            <Text style={{ fontSize: 24 }}>want to eat today?</Text>
                        </View>
                        <Image source={require('../../../ios/Assets/DP11.png')}
                            style={{ width: 50, height: 50, marginTop: 15 }}></Image>
                    </View>

                    <View style={{ width: wp(85), height: 57, backgroundColor: 'white', marginTop: 25, alignSelf: 'center', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 1, shadowRadius: 3, shadowColor: 'gray', borderRadius: 15 }}>
                        <TextInput style={{ width: wp(65), height: 57, backgroundColor: 'transparent' }}
                            placeholder='Search here'
                            paddingLeft={10}
                            fontSize={16}
                        ></TextInput>
                        <Image source={require('../../../ios/Assets/Search11.png')}
                            style={{ width: 25, height: 25, marginRight: 20 }}></Image>
                    </View>

                    <View style={{ width: wp(100), height: 120, backgroundColor: 'transparent', marginTop: 20, alignItems: 'center', }}>
                        <FlatList horizontal={true}
                            showsHorizontalScrollIndicator={false}

                            data={dummy}

                            renderItem={({ item }) =>

                                <View>
                                    <View style={{ width: 60, height: 60, backgroundColor: '#F40A49', alignItems: 'center', justifyContent: 'center', borderRadius: 10, margin: 17, shadowOffset: { width: 1, height: 3 }, shadowOpacity: 1, shadowRadius: 4, shadowColor: 'gray', }}>
                                        <Image source={item.img1}
                                            style={{ width: 55, height: 55, alignSelf: 'center' }}></Image>
                                    </View>

                                    <View style={{ width: 60, height: 20, backgroundColor: 'transparent', alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
                                        <Text>{item.var}</Text>

                                    </View>

                                </View>


                            }
                        >


                        </FlatList>



                    </View>




                    <View style={{ width: wp(80), height: 25, backgroundColor: 'transparent', alignSelf: 'center', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginTop: 40 }}>
                        <Text style={{ fontSize: 18 }}>Recomended for you</Text>
                        <Text style={{ fontSize: 18 }}>More</Text>


                    </View>

                    <View style={{ backgroundColor: 'transparent', width: wp(100), height: 325, marginTop: 25, alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>

                        <FlatList horizontal={true}
                            backgroundColor='transparent'
                            showsHorizontalScrollIndicator={false}

                            data={dummy1}

                            renderItem={({ item }) =>

                                <View style={{ width: 223, height: 240, backgroundColor: 'white', marginLeft: 15, shadowOffset: { width: 0, height: 3 }, shadowOpacity: 1, shadowRadius: 3, shadowColor: 'gray', borderRadius: 25, marginBottom: 5 }}>
                                    <ImageBackground source={item.img2}
                                        style={{ width: 222, height: 145, alignSelf: 'center' }}>

                                    </ImageBackground>
                                    <Text style={{ fontSize: 18, paddingLeft: 15, paddingTop: 5 }}>{item.var2}</Text>
                                    <View style={{ width: wp(50), height: 25, backgroundColor: 'transparent', alignSelf: 'center', alignItems: 'center', flexDirection: 'row', marginTop: 15, justifyContent: 'space-between' }}>
                                        <Text style={{ fontSize: 18 }}>{item.var3}</Text>
                                        <Image source={item.img3}
                                            style={{ width: 69, height: 14.6 }}></Image>

                                    </View>


                                </View>

                            }
                        >


                        </FlatList>


                    </View>



                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Search;