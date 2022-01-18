import React from 'react';
import { Text, View,Image,ScrollView,SafeAreaView,FlatList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Trending = () => {

    const dummy1 = [
        { img: require('../../../ios/Assets/Rectangle109.png') },
        { img: require('../../../ios/Assets/Rectangle108.png') },
        { img: require('../../../ios/Assets/Rectangle107.png') },

    ]

    const dummy2 = [
        { key: 'The Sakafo Restaurant', section11: 'North* Hamburgers* pure veg', img4: require('../../../ios/Assets/time-five.png'), section12: '15-30 min', section13: '$500 For Two', section14: 'OFFER', section15: '65%NEW50' },
        { key: 'The Sakafo Restaurant', section11: 'North* Hamburgers* pure veg', img4: require('../../../ios/Assets/time-five.png'), section12: '15-30 min', section13: '$500 For Two', section14: 'OFFER', section15: '65%NEW50' },
        { key: 'The Sakafo Restaurant', section11: 'North* Hamburgers* pure veg', img4: require('../../../ios/Assets/time-five.png'), section12: '15-30 min', section13: '$500 For Two', section14: 'OFFER', section15: '65%NEW50' },
        { key: 'The Sakafo Restaurant', section11: 'North* Hamburgers* pure veg', img4: require('../../../ios/Assets/time-five.png'), section12: '15-30 min', section13: '$500 For Two', section14: 'OFFER', section15: '65%NEW50' },

    ]
    
    

    return (
        <SafeAreaView>


                <View>
                    <View style={{ flexDirection: 'row', backgroundColor: 'transparent', width: wp(100), height: hp(5),justifyContent:'space-between'}}>
                        <View style={{ flexDirection: 'row', backgroundColor: 'transparent', width: wp(50), height: hp(6),alignItems:'center',}}>
                        <Image source={require('../../../ios/Assets/ArrowBack.png')}
                            style={{ width: 20, height: 20, marginLeft: 10 }}></Image>
                        <Text style={{ fontSize: 14, paddingLeft: 15 }}>Most Popular</Text>
                        <Text style={{ fontSize: 12, paddingLeft: 5,color:'gray' }}>20 Places</Text>
                        </View>

                        <View style={{ flexDirection:'row',backgroundColor: 'transparent', width: wp(15), height: hp(6), alignItems: 'center',marginRight:20}}>
                            <Image source={require('../../../ios/Assets/Group(1).png')}
                                style={{ width: 12, height: 13,marginLeft:5   }}></Image>
                            <Image source={require('../../../ios/Assets/Group(2).png')}
                                style={{ width: 12, height: 13,marginLeft:25}}></Image>

                        </View>

                    </View>

                    <FlatList horizontal={false}
                        data={dummy2}
                        renderItem={({ item }) =>
                            <View style={{ backgroundColor: 'transparent', width: wp(100), height: 289, marginTop: 20, alignItems: 'center', justifyContent: 'center' }}>

                                <FlatList horizontal={true}
                                    marginTop={0}



                                    showsHorizontalScrollIndicator={false}


                                    data={dummy1}

                                    renderItem={({ item }) =>

                                        <View style={{ backgroundColor: 'transparent', height: 170, alignItems: 'center', justifyContent: 'center', }}>
                                            <Image source={item.img}
                                                style={{ width: 251, height: 167, marginTop: 5 }}>
                                            </Image>
                                        </View>

                                    }
                                >
                                </FlatList>
                                <View style={{ backgroundColor: 'white', height: 125, width: wp(90), shadowOffset: { width: 0, height: 4 }, shadowOpacity: 1, shadowRadius: 3, shadowColor: 'gray', elevation: 5, borderBottomLeftRadius: 30, borderBottomRightRadius: 30,}}>
                                    <Text style={{ fontSize: 14, paddingLeft: 10, paddingTop: 5, fontWeight: 'bold' }}>{item.key}</Text>
                                    <Text style={{ fontSize: 12, paddingLeft: 10, paddingTop: 5, color: 'gray' }}>{item.section11}</Text>
                                    <View style={{ flexDirection: 'row', backgroundColor: 'transparent', width: wp(90), height: 25, marginTop: 15, alignItems: 'center' }}>
                                        <Image source={item.img4}
                                            style={{ width: 12, height: 12, marginLeft: 20 }}></Image>
                                        <Text style={{ fontSize: 10, paddingLeft: 5 }}>{item.section12}</Text>
                                        <Text style={{ fontSize: 10, paddingLeft: 170 }}>{item.section13}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', backgroundColor: 'transparent', width: wp(90), height: 25, marginTop: 5, alignItems: 'center' }}>
                                        <View style={{ backgroundColor: '#F40E46', width: 42, height: 15, marginLeft: 15, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ fontSize: 10, color: 'white' }}>{item.section14}</Text>

                                        </View>
                                        <Text style={{ fontSize: 10, paddingLeft: 10 }}>{item.section15}</Text>
                                    </View>
                                </View>



                            </View>
                            

                        }
                    
                    >
      
                  
                    </FlatList>

                    
                </View>


        </SafeAreaView>
    )
}
export default Trending;