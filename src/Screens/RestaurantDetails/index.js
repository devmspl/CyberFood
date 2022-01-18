import React from 'react';
import { Text, View, SafeAreaView, ScrollView, Image, ImageBackground, FlatList, SectionList, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from 'react-native-navigation';


const RestaurantDetails = ({navigation}) => {
    const dummy = [
        { img: require('../../../ios/Assets/Trending1.png'), key: 'Famous Dave’s Bar-B- Que', key2: 'Hot', img2: require('../../../ios/Assets/save1.png'), key3: 'Vegetarian, Indian , Pure Veg', img3: require('../../../ios/Assets/time-five.png'), key4: '15-30 min', key5: '$350 For Two', key6: 'OFFER', key7: 'Use Coupon NEW50' },
        { img: require('../../../ios/Assets/Trending1.png'), key: 'Famous Dave’s Bar-B- Que', key2: 'Hot', img2: require('../../../ios/Assets/save1.png'), key3: 'Vegetarian, Indian , Pure Veg', img3: require('../../../ios/Assets/time-five.png'), key4: '15-30 min', key5: '$350 For Two', key6: 'OFFER', key7: 'Use Coupon NEW50' },
        { img: require('../../../ios/Assets/Trending1.png'), key: 'Famous Dave’s Bar-B- Que', key2: 'Hot', img2: require('../../../ios/Assets/save1.png'), key3: 'Vegetarian, Indian , Pure Veg', img3: require('../../../ios/Assets/time-five.png'), key4: '15-30 min', key5: '$350 For Two', key6: 'OFFER', key7: 'Use Coupon NEW50' },
    ]

    const DATA = [
        {
            title: "Quik Bites", 
            data: ["Chicken Tikka Sub", "Cheese corn Roll ", "Cheese corn Roll ", ], 
            img4: [require('../../../ios/Assets/dot11.png')],
        
        },
        {
            title: "DISH",
            data: ["Chicken Tikka Sub", "Cheese corn Roll ", "Cheese corn Roll ","Manchurian",],
            img4: [require('../../../ios/Assets/dot11.png')], 
        },
        {
            title: "Soups",
            data: ["Chicken Tikka Sub", "Cheese corn Roll ", "Cheese corn Roll ",],
            img4: [require('../../../ios/Assets/dot11.png')], 
        },
    ]
    
  
    
    const dummy1 = [
        { img5: require('../../../ios/Assets/Trending2.png'), key8: 'HOT', img6: require('../../../ios/Assets/save1.png'), img7: require('../../../ios/Assets/Stars1.png'), key9: '3.1 (300+)' },
        { img5: require('../../../ios/Assets/Trending2.png'), key8: 'HOT', img6: require('../../../ios/Assets/save1.png'), img7: require('../../../ios/Assets/Stars1.png'), key9: '3.1 (300+)' },
        { img5: require('../../../ios/Assets/Trending2.png'), key8: 'HOT', img6: require('../../../ios/Assets/save1.png'), img7: require('../../../ios/Assets/Stars1.png'), key9: '3.1 (300+)' },
    ]

    const dummy2 = [
        { name: 'Today 11am-5pm, 6pm- 11pm', name2: 'OPEN NOW' },
        { name: 'Tuesday 11am- 5pm, 6pm- 11pm', name2: 'OPEN NOW' },
        { name: 'Wednesday 11am - 5pm, 6pm - 11pm', name2: 'OPEN NOW' },
        { name: 'Thursday 11am- 5pm, 6pm- 11pm', name2: 'OPEN NOW' },
        { name: 'Saturday 11am- 5pm, 6pm- 11pm', name2: 'OPEN NOW' },
        
    ]

    const dummy3 = [
        { pic: require('../../../ios/Assets/commentprofile.png'), name3: 'John Smith', pic2: require('../../../ios/Assets/5Stars.png'), name4: 'Your Comment', pic3: require('../../../ios/Assets/thumbsup.png'), pic4: require('../../../ios/Assets/thumbsdown.png'), name5: '88K'},
        { pic: require('../../../ios/Assets/commentprofile.png'), name3: 'John Smith', pic2: require('../../../ios/Assets/5Stars.png'), name4: 'Your Comment', pic3: require('../../../ios/Assets/thumbsup.png'), pic4: require('../../../ios/Assets/thumbsdown.png'), name5: '88K'},
    ]
   
  
    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <View style={{ width: wp(100), height: 43, backgroundColor: '#F30B4B', flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../../../ios/Assets/backarrow.png')}
                            style={{ width: 10, height: 16, marginLeft: 10 }}></Image>
                        <Text style={{ fontSize: 12, color: 'white', paddingLeft: 5, fontWeight: 'bold' }}>Back</Text>
                        <Image source={require('../../../ios/Assets/options.png')}
                            style={{ width: 18, height: 12, marginLeft:'auto',marginRight:15}}></Image>

                    </View>
                    <ImageBackground source={require('../../../ios/Assets/backgroundpicture.png')}
                        style={{ width: wp(100), height: 455 }}>
                        <ImageBackground source={require('../../../ios/Assets/shadowbackground.png')}
                            style={{ width: wp(100), height: 455 }}>
                            <View style={{ width: wp(100), height: 96, backgroundColor: 'transparent', marginTop: 150,flexDirection:'row',alignItems:'center' }}>
                                <Image source={require('../../../ios/Assets/VegSpicyHut.png')}
                                    style={{ width: 98, height: 96, marginLeft: 25 }}></Image>
                                <View style={{ width: 160, height: 96, backgroundColor: 'transparent' }}>
                                    <Text style={{ fontSize: 28, paddingLeft: 15,color:'white'}}>Spice Hut</Text>
                                    <Text style={{ fontSize: 26, paddingLeft: 15, color: 'white'}}>Indian</Text>
                                    <Text style={{ fontSize: 26, paddingLeft: 15, color: 'white'}}>Restaurant</Text>
                                </View>
                            </View>
                            <View style={{ width: 310, height: 35, backgroundColor: 'transparent', marginTop: 20, marginLeft: 35 }}>
                                <Text style={{ fontSize: 13, color: 'white' }}>Lorem ipsum sit amet, consectetur adipiscing elit,</Text>
                                <Text style={{ fontSize: 13, color: 'white' }}>incididunt ut labor</Text>
                            </View>

                            <View style={{ width: 123, height: 36, backgroundColor: '#28A745', borderRadius: 10, marginLeft:'auto',marginRight:20,alignItems:'center',justifyContent:'center' }}>
                                <Text style={{fontSize:13,color:'white'}}>25-35 min</Text>

                            </View>
                            <View style={{ width: wp(90), height: 24, backgroundColor: 'transparent', alignSelf: 'center', marginTop: 20, flexDirection: 'row',alignItems:'center' }}>
                                <View style={{ width: 105, height: 24, backgroundColor: '#28A745', borderRadius: 5,alignItems:'center',justifyContent:'center' }}>
                                    <Text style={{ fontSize: 12, color: 'white' }}>Mark as Favourite</Text> 
                                </View>
                                <View style={{ width: 60, height: 24, backgroundColor: '#F30950', marginLeft: 10, borderRadius: 5, alignItems: 'center',justifyContent:'center' }}>
                                    <Text style={{fontSize:12,color:'white'}}>Pure Veg</Text>
                                </View>
                                <View style={{ width: 58, height: 24, borderColor: 'red', borderRadius: 5, borderWidth: 1.5, marginLeft: 10,alignItems:'center',justifyContent:'center' }}>
                                    <Text style={{ fontSize: 12, color: '#F30950'}}>OFFERS</Text>

                                </View>
                            </View>
                        </ImageBackground>
                    </ImageBackground>
                    <Text style={{paddingTop:10,paddingLeft:5,fontSize:18}}>Trending this week</Text>

                    <View style={{ backgroundColor: 'transparent', width: wp(100), height: 325, marginTop: 10, alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>

                        <FlatList horizontal={true}
                            backgroundColor='transparent'


                            showsHorizontalScrollIndicator={false}


                            data={dummy}

                            renderItem={({ item }) =>
                                
                                <View style={{backgroundColor: 'white', marginLeft: 15, shadowOffset: {width: 1.5,height: 1.5},shadowOpacity: 1,shadowRadius: 3,shadowColor: 'gray',borderTopLeftRadius:30,borderTopRightRadius:30,marginBottom:5}}>
                                    <ImageBackground source={item.img}
                                        style={{ width: 291, height: 202, alignSelf: 'center' }}>
                                        <View style={{ backgroundColor: 'transparent', width: wp(65), height: 40, alignSelf: 'center', marginTop: 10, flexDirection: 'row', alignItems: 'center',justifyContent:'space-between' }}>
                                            <View style={{ width: 29, height: 17, backgroundColor: '#F40E46', borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                                                <Text style={{fontSize:10,color:'white'}}>{item.key2}</Text>
                                            </View>
                                            <Image source={item.img2}
                                            style={{width:25,height:25}}></Image>
                                        </View>
                                        </ImageBackground>
                                    <Text style={{ fontSize: 16, paddingLeft: 10, paddingTop: 5, fontWeight: 'bold' }}>{item.key}</Text>
                                    <Text style={{ fontSize: 12, paddingLeft: 10, paddingTop: 5 }}>{item.key3}</Text>
                                    <View style={{ backgroundColor: 'transparent', width: wp(60), height: 30, marginTop: 10, alignSelf: 'center',alignItems:'center',flexDirection:'row',}}>
                                        <Image source={item.img3}
                                            style={{ width: 13, height: 13 }}></Image>
                                        <Text style={{ fontSize: 10, color: 'gray',paddingLeft:5 }}>{item.key4}</Text>
                                        <Text style={{fontSize:10,color:'gray',paddingLeft:110}}>{item.key5}</Text>
                                        
                                    </View>
                                    <View style={{ backgroundColor: 'transparent', width: wp(65), height: 20, alignSelf: 'center',flexDirection:'row',alignItems:'center' }}>
                                        <View style={{ backgroundColor: '#F40E46', width: 46, height: 17, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ fontSize: 10, color: 'white' }}>{item.key6}</Text>
                                        </View>
                                        <Text style={{ fontSize: 10, paddingLeft: 10, color: 'gray' }}>{item.key7}</Text>
                                        
                                        
                                    </View>
                            </View>

                            }
                        >


                        </FlatList>


                    </View>
                    <View style={{ backgroundColor: 'transparent', width: wp(95), height: 30, alignSelf: 'center', alignItems: 'center', marginTop: 5, flexDirection: 'row',justifyContent:'space-between' }}>
                        <Text style={{fontSize:16}}>Menu</Text>
                        <Text style={{fontSize: 14}}>view all</Text>

                    </View>

                   
                    <SectionList
                       
                        keyExtractor={(item, index) => item + index}
                        sections={DATA}
                        renderItem={({ item }) => (
                            <View>
                            <View style={{width:wp(100),height:50,backgroundColor:'skyblue',marginTop:10,flexDirection:'row',alignItems:'center'}}>
                                    <Text>{item}</Text>
                                    <Image source={item.img4}></Image>
                                </View>

                                </View>
                        )}
                        renderSectionHeader={({ section }) => (
                            <View style={{width:wp(26),height:30,backgroundColor:'gray',marginTop:10}}>
                            <Text style={{fontSize:20,fontWeight:'bold'}}>{section.title}</Text>
                              
                            </View>
                           
                            )}
                    />
                    
                    <Text style={{ fontSize: 18, paddingTop: 15, paddingLeft: 10 }}>Book A Table</Text>
                    <Text style={{ fontSize: 12, paddingLeft: 15, paddingTop: 20 }}>Full Name</Text>
                    <TextInput style={{width:wp(90),height:25,borderWidth:1,alignSelf:'center',marginTop:10,borderColor:'gray'}}
                        placeholder='Enter Full Name'
                        placeholderTextColor={'black'}
                       paddingLeft={15}
                    ></TextInput>

                    <Text style={{ fontSize: 12, paddingLeft: 15, paddingTop: 20 }}>Email Address</Text>
                    <TextInput style={{ width: wp(90), height: 25, borderWidth: 1, alignSelf: 'center', marginTop: 10, borderColor: 'gray' }}
                        placeholder='Enter Email Address'
                        placeholderTextColor={'black'}
                        paddingLeft={15}
                    ></TextInput>

                    <Text style={{ fontSize: 12, paddingLeft: 15, paddingTop: 20 }}>Mobile Number</Text>
                    <TextInput style={{ width: wp(90), height: 25, borderWidth: 1, alignSelf: 'center', marginTop: 10, borderColor: 'gray' }}
                        placeholder='Enter Mobile Number'
                        placeholderTextColor={'black'}
                        paddingLeft={15}
                    ></TextInput>

                    <View style={{ width: 80, height: 29, backgroundColor: '#F40D47', marginTop: 45, borderRadius: 5, alignItems: 'center', justifyContent: 'center',marginLeft:"auto",marginRight:20}}>
                        <Text style={{fontSize:12,color:'white'}}>Submit</Text>
                    </View>

                    <Text style={{ fontSize: 18, paddingTop: 25,paddingLeft:15 }}>Gallery</Text>
                    <Text style={{ fontSize: 14, marginLeft: 'auto', paddingRight: 30 }}>view all</Text>
                    
                    <View style={{ backgroundColor: 'transparent', width: wp(100), height: 205, marginTop: 20, alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>

                        <FlatList horizontal={true}
                            backgroundColor='transparent'


                            showsHorizontalScrollIndicator={false}


                            data={dummy1}

                            renderItem={({ item }) =>
                                
                                <View style={{ width:291,height:202,backgroundColor: 'yellow', marginLeft: 15, shadowOffset: { width: 1.5, height: 1.5 }, shadowOpacity: 1, shadowRadius: 3, shadowColor: 'gray', borderTopLeftRadius: 30, borderTopRightRadius: 30, marginBottom: 5 }}>
                                    <ImageBackground source={item.img5}
                                        style={{ width: 291, height: 202, alignSelf: 'center' }}>
                                        <View style={{ backgroundColor: 'transparent', width: wp(70), height: 40, alignSelf: 'center', marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <View style={{ backgroundColor: '#F40E46', width: 29, height: 17,alignItems:'center',justifyContent:'center' }}>
                                                <Text style={{ fontSize: 10, color: 'white' }}>{item.key8}</Text>
                                            </View>
                                            <Image source={item.img6}
                                                style={{ width: 25, height: 25 }}></Image>
                                        </View>
                                        <View style={{backgroundColor: '#28A745', width: 70, height: 18, marginLeft: 'auto', marginRight: 10, marginTop: 'auto', marginBottom: 15,flexDirection:'row',alignItems:'center',borderRadius:3}}>
                                            <Image source={item.img7}
                                                style={{ width: 12, height: 12,marginLeft:3 }}></Image>
                                            <Text style={{fontSize:10,paddingLeft:3,color:'white'}}>{item.key9}</Text>
                                            
                                            </View>
                                    </ImageBackground>
                                </View>
                            }
                        >
                        </FlatList>
                    </View>

                    <Text style={{ fontSize: 18, paddingTop: 20, paddingLeft: 15 }}>Restaureant Info</Text>
                    
                    <View style={{ width: wp(90), height: 170, backgroundColor: 'red', alignSelf: 'center', marginTop: 15, alignItems: 'center', justifyContent: 'center' }}>
                        
                      
                    </View>
                    <Text style={{ fontSize:12,paddingLeft: 20, paddingTop: 15 }}>Jagjit Nagar Near Railway Crossing,</Text>
                    <Text style={{ fontSize: 12,paddingLeft: 20, paddingTop: 5 }}>Near Model Town, Ludhiana, Punjab</Text>
                    <Text style={{ fontSize: 12,paddingLeft: 20, paddingTop: 5 }}>+9101234-56789, +9101234-6789</Text>

                    <Text style={{ fontSize: 12, paddingLeft: 15, paddingTop: 20 }}>restaurent@gmail.com</Text>
                    
                    <View style={{width:wp(100),backgroundColor:'transparent',alignItems:'center',justifyContent:'center',marginTop:15}}>
                    <FlatList 
                        showsHorizontalScrollIndicator={false}

                        data={dummy2}

                        renderItem={({ item }) =>
                        
                            <View style={{ width: wp(100),marginTop:5, backgroundColor: 'transparent', height: 25,alignItems:'center',justifyContent:'flex-start',flexDirection:'row' }}>
                                <Text style={{fontSize:12,paddingLeft:20}}>{item.name}</Text>
                                <View style={{ backgroundColor: '#28A745', width: 60, height: 12, marginLeft: 15, borderRadius: 2 ,alignItems:'center',justifyContent:'center' }}>
                                    <Text style={{fontSize:10,color:'white'}}>{item.name2}</Text>

                                </View>

                            </View>
                           
                            
                        }
                    >
                         
                           
                        </FlatList>
                    </View>

                <View style={{backgroundColor:'transparent',width:wp(85),alignItems:'center',justifyContent:'space-between',alignSelf:'center',marginTop:15,flexDirection:'row'}}>
                        <Text style={{ fontSize: 18, }}>Rate this Place</Text>
                        <Image source={require('../../../ios/Assets/5Stars.png')}
                        style={{width:127,height:16}}></Image>
                        
                    </View>
                    
                    <View style={{ width: wp(95), height: 286, backgroundColor: 'gray', alignSelf: 'center', marginTop: 20, }}>
                        <MapView


                        ></MapView>
                    </View>


                    <View style={{ width: wp(100),height:hp(50), backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', marginTop: 15 }}>
                    <FlatList
                            showsHorizontalScrollIndicator={false}
                            ListFooterComponent={
                                <View >
                                    <Text style={{ fontSize: 15, alignSelf: 'center',paddingTop:10 }}>See All Reviews</Text>
                                </View>
                            }

                        data={dummy3}

                        renderItem={({ item }) =>

                            <View style={{
                                width: wp(100), marginTop: 10, backgroundColor: 'white', height: 300, shadowOffset: {
                                    width: 1.5,
                                    height: 1.5
                                },
                                shadowOpacity: 1,
                                shadowRadius: 3,
                                shadowColor: 'gray',}}>
                                <View style={{ width: wp(100), backgroundColor: 'transparent', height: 40, alignItems: 'center',justifyContent:'space-between',flexDirection:'row',marginTop:10 }}>
                                <Image source={item.pic}
                                        style={{ width: 30, height: 30,marginLeft:20 }}></Image>
                                    <Text style={{ fontSize: 14, fontWeight: 'bold',marginRight:'auto',paddingLeft:10 }}>{item.name3}</Text>
                                    <Image source={item.pic2}
                                        style={{ width: 127, height: 16, marginRight: 20 }}></Image>
                                   
                                </View>
                                
                                <Text style={{ paddingTop: 10, paddingLeft: 30 }}>{item.name4}</Text>
                                <View style={{ width: wp(40), height: 60, backgroundColor: 'transparent', marginLeft: 50, marginTop: "auto", marginBottom: 60,flexDirection:'row',alignItems:'center',justifyContent:'space-between' }}>
                                    <View style={{ width: 74, height: 36, backgroundColor: 'gray', alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row', borderRadius: 15, borderWidth: 1, borderColor:'#F40E46'}}>
                                        <Image source={item.pic3}></Image>
                                        <Text style={{fontSize:10,}}>{item.name5}</Text>
                                    </View>
                                    <View style={{ width: 64, height: 36, backgroundColor: 'gray', alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row', borderRadius: 15, borderWidth: 1, borderColor: '#F40E46' }}>
                                        <Image source={item.pic4}></Image>
                                        <Text style={{ fontSize: 10, }}>{item.name5}</Text>

                                    </View>
                                </View>
                                
                                <Text></Text>
                                
                            </View>
                            

                          


                        }
                    >

                        </FlatList>
                    </View>

                    <View style={{
                        width: wp(100), height: 90, backgroundColor: 'white', marginTop: 15, shadowOffset: {
                            width: 1.5,
                            height: 1.5
                        },
                        shadowOpacity: 1,
                        shadowRadius: 3,
                        shadowColor: 'gray',}}>
                        <View style={{ width: wp(85), height: 30, backgroundColor: 'transparent', alignSelf: 'center',flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:5 }}>
                            <Text style={{ fontSize: 12 }}>Leave Comment</Text>
                            <Image source={require('../../../ios/Assets/5Stars.png')}
                            style={{width:127,height:17}}></Image>

                        </View>
                        <Text style={{ fontSize: 10, color: 'gray', paddingLeft: 30, paddingTop: 1 }}>Rate the place</Text>
                        <TextInput style={{ width: wp(90), height: 25, alignSelf: 'center', marginTop: 15, borderColor: 'gray', }}
                            placeholder='Your Comment'
                            placeholderTextColor={'black'}
                            paddingLeft={15}
                        ></TextInput>
                    </View>

                    <View style={{ width: wp(90), height: 30, backgroundColor: '#F40E46', marginTop: 15, alignSelf: 'center',alignItems:'center',justifyContent:'center',borderRadius:5 }}>
                        <Text style={{color:'white',fontSize:12}}>SUBMIT COMMENT</Text>

                    </View>
                   
                    <View style={{ width: wp(88), height: 63, backgroundColor: '#28A745', alignSelf: 'center', marginTop: 20, borderRadius: 15, flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../../../ios/Assets/cart11.png')}
                            style={{ width: 18, height: 22,marginLeft:20 }}></Image>
                        <View style={{ width: 2, height: 35, backgroundColor: 'white', marginLeft: 15 }}></View>
                        <View style={{ width: wp(35), height: 35, backgroundColor: 'transparent',justifyContent:'center',marginLeft:10 }}>
                            <Text style={{fontSize:12,color:'gray'}}>5 ITEM</Text>
                            <Text style={{fontSize:14,color:'white'}}>$235,50.00</Text>

                        </View>
                        <Text style={{ fontSize: 14, color: 'white', marginTop: 15, marginLeft: 'auto'}}>proceed to cart</Text>
                        <Image source={require('../../../ios/Assets/forwardarrow.png')}
                        style={{width:6.6,height:14.2,marginTop:15,marginLeft:'auto',marginRight:20}}></Image>

                        </View>
                        
                        
                    
                    </View>
            </ScrollView>
        </SafeAreaView>

    )
}
export default RestaurantDetails;
const styles = StyleSheet.create({

})