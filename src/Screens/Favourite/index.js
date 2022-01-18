import React from 'react';
import { Text, View, FlatList,Image, ImageBackground,SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import { widthPercentageToDP as wp, heightPercentageToDP as hp  } from 'react-native-responsive-screen';

const Favourite = () => {
    const dummy = [
        { img: require('../../../ios/Assets/fav1.png'), section1: ' HOT ', color: '#F40E46', img2: require('../../../ios/Assets/save1.png'), img3: require('../../../ios/Assets/Stars1.png'), section2: '4.1', section3: 'The Sakafo Restaurant', section4: 'Noth Homburgers, Pure' },
        { img: require('../../../ios/Assets/fav2.png'), section1: ' 50%OFF ', color: '#FFC107', img2: require('../../../ios/Assets/save1.png'), img3: require('../../../ios/Assets/Stars1.png'), section2: '4.4', section3: 'Thai Famous Cuisine', section4: 'Pure Veg Indian, Indian' },
        { img: require('../../../ios/Assets/fav3.png'), section1: ' OFFER ', color: '#F40E46', img2: require('../../../ios/Assets/save1.png'), img3: require('../../../ios/Assets/Stars1.png'), section2: '2.4', section3: 'The Maharashtra Rest...', section4: 'Noth, Homburgers, Pure Veg'   },
        { img: require('../../../ios/Assets/fav4.png'), section1: '  DEAL  ', color: '#007BBF', img2: require('../../../ios/Assets/save1.png'), img3: require('../../../ios/Assets/Stars1.png'), section2: '3.1', section3: 'Bite Me Sandwiches', section4: 'American, Noth Indian. pur ...' },
        { img: require('../../../ios/Assets/fav1.png'), section1: ' PROMOTED ', color: '#343A40', img2: require('../../../ios/Assets/save1.png'), img3: require('../../../ios/Assets/Stars1.png'), section2: '3.4', section3: 'The Sakafo Restaurant', section4: 'Noth, Homburgers, Pure Veg' },
        { img: require('../../../ios/Assets/fav2.png'), section1: ' 50%OFF ', color: '#17A2B8', img2: require('../../../ios/Assets/save1.png'), img3: require('../../../ios/Assets/Stars1.png'), section2: '4.1', section3: 'Bite Me Sandwiches', section4: 'American, pur veg ' },
        { img: require('../../../ios/Assets/fav3.png'), section1: ' PROMOTED ', color: '#FFC107', img2: require('../../../ios/Assets/save1.png'), img3: require('../../../ios/Assets/Stars1.png'), section2: '4.4', section3: 'The Sakafo Restaurant', section4: 'Maha, Homburgers, Pure Veg' },
        { img: require('../../../ios/Assets/fav4.png'), section1: ' OFFER ', color: '#F40E46', img2: require('../../../ios/Assets/save1.png'), img3: require('../../../ios/Assets/Stars1.png'), section2: '4.1', section3: 'Bite Me Sandwiches', section4: 'Indian, pur veg ' },
        { img: require('../../../ios/Assets/fav3.png'), section1: ' OFFER ', color: '#F40E46', img2: require('../../../ios/Assets/save1.png'), img3: require('../../../ios/Assets/Stars1.png'), section2: '2.4', section3: 'The Maharashtra Rest...', section4: 'Noth, Homburgers, Pure Veg' },
        { img: require('../../../ios/Assets/fav4.png'), section1: '  DEAL  ', color: '#007BBF', img2: require('../../../ios/Assets/save1.png'), img3: require('../../../ios/Assets/Stars1.png'), section2: '3.1', section3: 'Bite Me Sandwiches', section4: 'American, Noth Indian. pur ...' },
       

    ]
    return (
        <SafeAreaView>
            <ScrollView>
        <View>
            <View style={{ flexDirection: 'row', backgroundColor: 'transparent', width: wp(100), height:40, justifyContent: 'space-between',marginTop:0,alignItems:'center' }}>
                <View style={{ flexDirection: 'row', backgroundColor: 'transparent', width: wp(50), height: hp(6), alignItems: 'center', }}>
                    <Image source={require('../../../ios/Assets/ArrowBack.png')}
                                style={{ width: 20, height: 30, marginLeft: 10 }}></Image>
                    <Text style={{fontSize: 14, paddingLeft: 10, }}>Favourites</Text>
                   
                </View>

                <View style={{ flexDirection: 'row', backgroundColor: 'transparent', width: wp(15), height: hp(6), alignItems: 'center', marginRight: 20 }}>
                    <Image source={require('../../../ios/Assets/Group(1).png')}
                        style={{ width: 12, height: 13, marginLeft: 5 }}></Image>
                    <Image source={require('../../../ios/Assets/Group(2).png')}
                        style={{ width: 12, height: 13, marginLeft: 25 }}></Image>

                </View>

            </View>
            <View style={{width:wp(100),height:hp(0.1),backgroundColor:'gray'}}></View>
            <View style={{ backgroundColor: 'transparent', marginTop: 5, alignItems: 'center', width: wp(100)}}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    numColumns={2}
                   

                    data={dummy}

                    renderItem={({ item }) =>
                    <View style={{backgroundColor:'white',width:wp(49),height:165,marginTop:5,alignItems:'center'}}>
                        <ImageBackground source={item.img}
                                style={{ width: 177, height: 109, marginTop: 5 }}>
                                <View style={{ justifyContent:'space-between',flexDirection:'row',width: wp(40), height: 35, backgroundColor: 'transparent',alignItems:'center',alignSelf:'center' }}>
                                    <Text style={{ fontSize: 10, color: 'white', backgroundColor: item.color, }}>{item.section1}</Text>
                                    <Image source={item.img2}
                                    style={{width:25,height:25,}}></Image>
                                </View>
                                <View style={{ backgroundColor: '#28A745', width: 30, height: 18, marginTop: 50, marginLeft: 140, flexDirection: 'row', alignItems: 'center',borderRadius:3 }}>
                                    <Image source={item.img3}
                                        style={{ width: 10, height: 10,marginLeft:3 }}></Image>
                                    <Text style={{color:'white',fontSize:8,paddingLeft:3}}>{item.section2}</Text>
                                   
                                </View>
                            </ImageBackground>
                            <View style={{ width: wp(42), height: 45,backgroundColor:'transparent',marginTop:5 }}>
                                <Text style={{ fontSize: 14, }}>{item.section3}</Text>
                                <Text style={{fontSize:12,paddingTop:3,color:'gray'}}>{item.section4}</Text>
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
export default Favourite;