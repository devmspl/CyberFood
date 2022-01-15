import React from 'react';
import { Text, View,SafeAreaView,ScrollView,Image,FlatList,TextInput, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Orders = ({ navigation }) => {
    
    const dummy = [
        { img: require('../../../ios/Assets/dot11.png'), section1: 'Chicken Tikka Sub', section2: '1', section3: '$628' },
        { img: require('../../../ios/Assets/dot11.png'), section1: 'Mithi Chicken Dry', section2: '1', section3: '$628' },
        { img: require('../../../ios/Assets/dot11.png'), section1: 'Reshmi Kabab', section2: '1', section3: '$628' },
        { img: require('../../../ios/Assets/dot22.png'), section1: 'Lemon cheese Dry', section2: '1', section3: '$628' },
        { img: require('../../../ios/Assets/dot22.png'), section1: 'Rama Paneer', section2: '1', section3: '$628' },
        { img: require('../../../ios/Assets/dot22.png'), section1: 'Special Lemon Cheese', section2: '1', section3: '$628' },
        { img: require('../../../ios/Assets/dot11.png'), section1: 'Tandoori chicken', section2: '1', section3: '$628' },
        
    ]

    return (
        <SafeAreaView>
            <ScrollView>
        <View>
                    <View style={{ width: wp(100), height: 37, backgroundColor: 'transparent', flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../../../ios/Assets/ArrowBack.png')}
                            style={{ width: 25, height: 25,marginLeft:10 }}></Image>
                        <Text style={{ fontSize: 16, paddingLeft: 5 }}>Order</Text>
                        <Image source={require('../../../ios/Assets/cart22.png')}
                            style={{ width: 17, height: 20,marginLeft:'auto',marginRight:20 }}
                        ></Image>
                        <Image source={require('../../../ios/Assets/options11.png')}
                        style={{width:20,height:18,marginRight:20}}>

                        </Image>

                    </View>
                    <View style={{ width: wp(100), height: 0.2, backgroundColor: 'gray' }}></View>
                    
                    <View style={{width: wp(100), height: 60, backgroundColor: 'white', marginTop: 15, flexDirection: 'row', alignItems: 'center', position: 'relative', shadowOffset: { width: 1,height: 3},shadowOpacity: 1,shadowRadius: 3,shadowColor: 'gray', }}>
                        <Image source={require('../../../ios/Assets/profilepic11.png')}
                            style={{ width: 45, height: 45, marginLeft: 15 }}></Image>
                        <Text style={{ paddingLeft: 10, marginBottom: 'auto', paddingTop: 10, fontSize: 14 }}>The Chatori Street</Text>
                        <View style={{ width: wp(80), height: 23, backgroundColor: 'transparent', position: 'absolute', marginLeft: 70, top: 27, flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../../../ios/Assets/Group34123.png')}
                                style={{ width: 13, height: 18 }}></Image>
                            <Text style={{fontSize:12,paddingLeft:5}}>ramdaspeth, Nagpur, Maharashtra</Text>
                        </View>

                    </View>

                    <View>
                        
                        
                    <FlatList 
                        marginTop={20}



                        showsHorizontalScrollIndicator={false}


                        data={dummy}

                            renderItem={({ item }) =>
                            
                            
                                <View style={{ backgroundColor: 'white', borderRadius: 1.5, borderWidth: 0.8, alignItems: 'center', justifyContent: 'center', height: 50, borderColor: 'gray',flexDirection:'row' }}>

                                    <Image source={item.img}
                                        style={{ width: 20, height: 20, marginLeft:15}}>

                                    </Image>
                                    <Text style={{ marginRight: 'auto', paddingLeft: 10,fontSize:14 }}>{item.section1}</Text>
                                    <View style={{ width: 78, height: 23, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', borderRadius: 5, borderWidth: 0.5, borderColor: 'red', backgroundColor: 'white', marginRight: 15 }}>
                                       <Text>-</Text>
                                        <Text>{item.section2}</Text>
                                        <Text>+</Text>


                                    </View>
                                    <Text style={{fontSize:14,paddingRight:20}}>{item.section3}</Text>

                                </View>

                        }
                    >
                        </FlatList>
                    </View>
                    
                    <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'transparent', marginTop: 20 }}>
                        <View style={{ width: wp(70), height: 30, backgroundColor: 'white', marginLeft: 15, shadowOffset: { width: 1.5, height: 1.5 }, shadowOpacity: 1, shadowRadius: 1,}}>
                        <TextInput style={{ width: wp(70), height: 30, borderColor: 'gray', }}
                            placeholder='Enter Promo Code'
                            placeholderTextColor={'gray'}
                            paddingLeft={15}
                            ></TextInput>
                        </View>
                        
                        <View style={{backgroundColor: '#F40E46', width: 90, height: 32, alignItems: 'center', justifyContent: 'center',shadowOffset: {width: 1.5,height: 1.5},shadowOpacity: 1,shadowRadius: 3, }}>
                            <Text style={{color:'white',fontSize:14}}>% APPLY</Text>
                        </View>
                    </View>

                    <View style={{ width: wp(92), height: 47, backgroundColor: 'white', marginTop: 10, alignSelf: 'center', flexDirection: 'row', alignItems: 'center', shadowOffset: { width: 0, height: 3 }, shadowOpacity: 1, shadowRadius: 3 }}>
                        <View style={{ width: 41, height: 47, borderWidth: 0.5, borderColor: 'gray', alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('../../../ios/Assets/chatbox11.png')}
                            style={{width:19.5,height:18.6}}></Image>

                        </View>
                        <TextInput
                            placeholder='Any Suggesstions? We Will pass it on ...'
                            placeholderTextColor={'gray'}
                            paddingLeft={10}
                            fontSize={14}
                        ></TextInput>

                    </View>

                    <View style={{ width: wp(93), height: 30, backgroundColor: 'transparent', alignSelf: 'center', alignItems: 'center', marginTop: 30, flexDirection: 'row',justifyContent:'space-between' }}>
                        <Text style={{ fontSize: 14 }}>Item Total</Text>
                        <Text style={{ fontSize: 14 }}>$3140</Text>
                    </View>

                    <View style={{ width: wp(93), height: 30, backgroundColor: 'transparent', alignSelf: 'center', alignItems: 'center', marginTop: 0, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 14 }}>Restaurant Charge</Text>
                        <Text style={{ fontSize: 14 }}>$628</Text>
                    </View>

                    <View style={{ width: wp(93), height: 30, backgroundColor: 'transparent', alignSelf: 'center', alignItems: 'center', marginTop: 0, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 14 }}>Delivery Free</Text>
                        <Text style={{fontSize:14}}>$10</Text>
                    </View>

                    <View style={{ width: wp(93), height: 30, backgroundColor: 'transparent', alignSelf: 'center', alignItems: 'center', marginTop: 0, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize:14,color:'#28A745'}}>Total Discount</Text>
                        <Text style={{ fontSize: 14,color: '#28A745' }}>$1884</Text>
                    </View>

                    <View style={{ width: wp(93), height: 1, backgroundColor: 'gray', alignSelf: 'center', marginTop: 3 }}></View>
                    
                    <View style={{ width: wp(93), height: 30, backgroundColor: 'transparent', alignSelf: 'center', marginTop: 3, flexDirection: 'row', alignItems: 'center',justifyContent:'space-between' }}>
                        <Text style={{ fontSize: 14, fontWeight: 'bold' }}>TO PAY</Text>
                        <Text style={{ fontSize: 14, fontWeight: 'bold' }}>$1329</Text>

                    </View>

                    <View style={{ width: wp(88), height: 63, backgroundColor: '#28A745', alignSelf: 'center', marginTop: 15, borderRadius: 15, flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../../../ios/Assets/cart11.png')}
                            style={{ width: 18, height: 22, marginLeft: 20 }}></Image>
                        <View style={{ width: 2, height: 35, backgroundColor: 'white', marginLeft: 15 }}></View>
                        <View style={{ width: wp(35), height: 35, backgroundColor: 'transparent', justifyContent: 'center', marginLeft: 10 }}>
                            <Text style={{ fontSize: 12, color: 'gray' }}>5 ITEM</Text>
                            <Text style={{ fontSize: 14, color: 'white' }}>$235,50.00</Text>

                        </View>
                        <Text style={{ fontSize: 14, color: 'white', marginLeft:'auto',paddingRight:10}}>pay</Text>
                        <Image source={require('../../../ios/Assets/forwardarrow.png')}
                            style={{ width: 6.6, height: 14.2,marginRight:20}}></Image>

                    </View>

                   </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Orders;