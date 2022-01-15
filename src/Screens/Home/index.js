import React from 'react';
import { Image, SafeAreaView, Text, View, StyleSheet, TextInput, FlatList, ScrollView, ImageBackground,TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';




const Home = ({ navigation }) => {
   
    const dummy = [
        { key: 'rolls', img: require('../../../ios/Assets/rolls.png') },
        { key: 'fries', img: require('../../../ios/Assets/fries.png') },
        { key: 'sandwich', img: require('../../../ios/Assets/sandwich.png') },
        { key: 'manchurian', img: require('../../../ios/Assets/manchurian.png') },
        { key: 'momos', img: require('../../../ios/Assets/moms.png') },
    ]
    const dummy1 = [
        { key: 'Famous Dave’s Bar-B- Que', img: require('../../../ios/Assets/Bar-B-Que.png'), section11: 'Vegetarian, Indian , Pure Veg', img4: require('../../../ios/Assets/time-five.png'), section12: '15-30 min', section13: '$350 For Two', section14: 'OFFER', section15: 'Use Coupon NEW50', section16: 'Hot', img5: require('../../../ios/Assets/save1.png')},
        { key: 'Famous Dave’s Bar-B- Que', img: require('../../../ios/Assets/Bar-B-Que.png'), section11: 'Vegetarian, Indian , Pure Veg', img4: require('../../../ios/Assets/time-five.png'), section12: '15-30 min', section13: '$350 For Two', section14: 'OFFER', section15: 'Use Coupon NEW50', section16: 'Hot', img5: require('../../../ios/Assets/save1.png')},
        { key: 'Famous Dave’s Bar-B- Que', img: require('../../../ios/Assets/Bar-B-Que.png'), section11: 'Vegetarian, Indian , Pure Veg', img4: require('../../../ios/Assets/time-five.png'), section12: '15-30 min', section13: '$350 For Two', section14: 'OFFER', section15: 'Use Coupon NEW50', section16: 'Hot', img5: require('../../../ios/Assets/save1.png')},
    ]

    const dummy2 = [
        { img: require('../../../ios/Assets/safefood.png') },
        { img: require('../../../ios/Assets/blackfriday.png') },
        { img: require('../../../ios/Assets/safefood.png') },
        { img: require('../../../ios/Assets/blackfriday.png') },
    ]

    const dummy3 = [
        { key: 'The Sakafo Restau...', img: require('../../../ios/Assets/TheSakafo.png'), section: 'Hanburgers, pure veg', img1: require('../../../ios/Assets/Stars.png'), section2: 'OFFER', section3: '60% NLW50' },
        { key: 'Thai Famous India...', img: require('../../../ios/Assets/ThaiFamous.png'), section: 'American, Pure veg', img1: require('../../../ios/Assets/Stars.png'), section2: 'OFFER', section3: '50% Off'},
        { key: 'The Sakafo Restau...', img: require('../../../ios/Assets/BiteMeNow.png'), section: 'Hanburgers, pure veg', img1: require('../../../ios/Assets/Stars.png'), section2: 'OFFER', section3: '30% NLW50'},
        { key: 'Bite Me Now Sand ...', img: require('../../../ios/Assets/TheSakafo2.png'), section: 'American, Pure veg', img1: require('../../../ios/Assets/Stars.png'), section2: 'OFFER', section3: '30% Off'},
        
    ]

    const dummy4 = [
        { img: require('../../../ios/Assets/Rectangle105.png'), section4: 'The sakafo Restaur...', section5: 'Promoted', img2: require('../../../ios/Assets/Stars1.png'), section6: '3.1', section7: 'Noth Homburgers, Pure', img3: require('../../../ios/Assets/time-five.png'), section8: '15-25 min', color: '#F40E46', section9: 'OFFER', section10: '65%NEW50'},
        { img: require('../../../ios/Assets/Rectangle102.png'), section4: 'Thai Famous Cuisine', section5: 'Promoted', img2: require('../../../ios/Assets/Stars1.png'), section6: '3.1', section7: 'Noth Homburgers, Pure', img3: require('../../../ios/Assets/time-five.png'), section8: '15-35 min', color: '#28A745', section9: 'OFFER', section10: '65%off'},
        { img: require('../../../ios/Assets/Rectangle103.png'), section4: 'Bite Me Now Sand ...', section5: 'Promoted', img2: require('../../../ios/Assets/Stars1.png'), section6: '3.1', section7: 'Noth Homburgers, Pure', img3: require('../../../ios/Assets/time-five.png'), section8: '15-25 min', color: '#F40E46', section9: 'OFFER', section10: '65%NEW50'},
    ]



    return (
        <SafeAreaView>
            <ScrollView>
                
                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../../../ios/Assets/Group34123.png')}
                            style={{ width: 20, height: 30, marginLeft: 20 }}></Image>
                        <Text style={styles.location}>Pune, Maharashtra 411014</Text>
                        <Image source={require('../../../ios/Assets/filter.png')}
                            style={{ width: 20, height: 20, position: 'absolute', right: 55 }}></Image>
                        <Image source={require('../../../ios/Assets/option.png')}
                            style={{ width: 20, height: 20, position: 'absolute', right: 20 }}></Image>
                    </View>

                    <TextInput style={styles.Search}
                        placeholder='Search for restaurants or dishes'
                        placeholderTextColor="gray"

                    />
                    <View style={{ backgroundColor: 'transparent', width: wp(100), height: hp(12), marginTop: 20, alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
                        <FlatList horizontal={true}
                            showsHorizontalScrollIndicator={false}

                            data={dummy}

                            renderItem={({ item }) =>




                                <View>
                                    <Image source={item.img}
                                        style={{ width: 60, height: 60, alignSelf: 'center', marginLeft: 25 }}
                                    ></Image>
                                    <Text style={styles.textStyle}>{item.key}</Text>


                                </View>


                            }
                        >


                        </FlatList>



                    </View>
                    <View style={{ flexDirection: 'row', backgroundColor: 'transparent', marginTop: 15, justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 18, paddingLeft: 20, alignSelf: 'center',fontWeight:'600' }}>Trending this week</Text>
                        <Text style={{ alignSelf: 'center', paddingRight: 20,color:'red',fontWeight:'500' }}>view all</Text>
                    </View>


                    <View style={{ backgroundColor: 'transparent', width: wp(100), height:325, marginTop: 20, alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
                       
                        <FlatList horizontal={true}
                            backgroundColor='transparent'


                            showsHorizontalScrollIndicator={false}


                            data={dummy1}

                            renderItem={({ item }) =>
                               
                                <View style={styles.viewStyle}>
                                    
                                    <ImageBackground source={item.img}
                                        style={{ width: 290, height: 200, alignSelf: 'center' }}>
                                        <View style={{width:wp(68),height:30,backgroundColor:'transparent',alignSelf:'center',marginTop:10,flexDirection:'row',alignItems:'center',justifyContent:"space-between"}}>
                                            <View style={{ width: 29, height: 17, backgroundColor: '#F40E46', borderRadius: 5,alignItems:'center',justifyContent:'center' }}>
                                                <Text style={{color:'white',fontSize:10}}>{item.section16}</Text>
                                            </View>
                                            <Image source={item.img5}
                                            style={{width:25,height:25}}></Image>
                                        </View>
                                        </ImageBackground>
                                    
                                    <Text style={styles.textStyle4}>{item.key}</Text>
                                    <Text style={{ fontSize: 12, paddingLeft: 10, paddingTop: 5, color: 'gray' }}>{item.section11}</Text>
                                    <View style={{ alignItems:'center',backgroundColor: 'transparent', width: 285, height: 20, marginTop: 10, flexDirection: 'row' }}>
                                        <Image source={item.img4}
                                        style={{width:13,height:13,marginLeft:20}}>
                                        </Image>
                                        <Text style={{ fontSize: 10, paddingLeft: 5, color: 'gray' }}>{item.section12}</Text>
                                        <Text style={{ fontSize: 10, paddingLeft: 100, color: 'gray' }}>{item.section13}</Text>
                                    </View>

                                    <View style={{ flexDirection:'row',backgroundColor:'transparent', width: 220, height: 30, alignItems: 'center',marginTop:15 }}>
                                        <View style={{ justifyContent:'center',backgroundColor: '#F40E46', width: 46, height: 17, marginLeft: 10, borderRadius: 5,alignItems:'center'}}>
                                            <Text style={{color:'white',fontSize:10,fontWeight:'bold'}}>{item.section14}</Text>
                                        </View>
                                        <Text style={{fontSize:10,fontWeight:'bold',paddingLeft:5,color:'gray'}}>{item.section15}</Text>

                                    </View>

                                    </View>
                                    


                            }
                        >

                        
                            </FlatList>
                        
                           
                    </View>

                    <View style={{ backgroundColor: 'transparent', width: wp(100), height: 210, marginTop: 5,}}>
                        <FlatList horizontal={true}
                            showsHorizontalScrollIndicator={false}

                            data={dummy2}

                            renderItem={({ item }) =>

                                <View style={{shadowOffset: {width: 1.5,height: 1.5},shadowOpacity: 1,shadowRadius: 3,shadowColor: 'gray',marginLeft:10,marginTop:10}}>
                                    <Image source={item.img}
                                        style={{ width: 140, height: 200, alignSelf: 'center',borderRadius:20}}
                                    ></Image>
                                </View>
                            }
                        >
                            
                        </FlatList>
                     
                    </View>

                    <View style={{ backgroundColor: 'transparent', marginTop: 10,alignItems:'center',width:wp(100),height:440}}>
                        <FlatList 
                            showsVerticalScrollIndicator={false}
                            columnWrapperStyle={{ justifyContent: 'space-between' }}
                            numColumns={2}
                            bottom={5}
                            
                            bounces={false}
                            // top={5}


                            

                            
                            data={dummy3}

                            renderItem={({ item }) =>

                                <View style={{width: 175,height:200, backgroundColor: 'white', marginTop: 10,marginLeft:10,marginRight:10, marginBottom:10,borderRadius: 20, shadowOffset: {width: 1.5,height: 1.5},shadowOpacity: 1,shadowRadius: 3,shadowColor: 'gray',}}>
                                    <Image source={item.img}
                                        style={{
                                            width: 175, height:100,borderTopLeftRadius:20,borderTopRightRadius:20,}}
                                    ></Image>
                                    
                                    <Text style={{ paddingTop: 10, paddingLeft: 5, fontSize: 13, fontWeight: 'bold' }}>{item.key}</Text>
                                    <Text style={{ paddingTop: 5, paddingLeft: 5, fontSize: 12, color: 'gray', fontWeight: 'bold' }}>{item.section}</Text>
                                    <Image source={item.img1}
                                    style={{width:69,height:15,marginTop:5,marginLeft:5}}>
                                    </Image>

                                    <View style={{ flexDirection: 'row', backgroundColor: 'transparent',marginTop:10,alignItems:'center',bottom:3}}>
                                        <View style={{ backgroundColor:'#F40E46',alignItems:'center',justifyContent:'center',width:46,height:17,marginLeft:5,borderRadius:5}}>
                                            <Text style={{fontSize:10,fontWeight:'bold',color:'white'}}>{item.section2}</Text>
                                        </View>
                                        <Text style={{paddingLeft:10,fontSize:10}}>{item.section3}</Text>
                                    </View>
                                       

                                    </View>

                                
                            }
                        >
                        </FlatList>

                    </View>

                    <View style={{ width: 354, height: 177, alignSelf: 'center', backgroundColor: 'yellow', marginTop: 20,borderRadius:20,position:'relative' }}>
                        <ImageBackground source={require('../../../ios/Assets/backgroundred.png')}
                            style={{ width: 354, height: 177,justifyContent:'center' }}>
                            <Image source={require('../../../ios/Assets/plate.png')}
                                style={{ width: 100, height: 100, marginLeft: 30 }}></Image>
                            <Image source={require('../../../ios/Assets/Cart.png')}
                                style={{ width: 18, height: 22, marginTop: 20, position: 'absolute', top: 10, right: 30 }}></Image>
                            <Text style={{ fontSize: 26, color: 'white', position: 'absolute', right: 20, top: 60,}}>Up To 50%OFF’</Text>
                            <Text style={{ fontSize: 14, color: 'white', position: 'absolute', right: 40, top: 90, }}>+ Extra 10% Cashback</Text>
                            <View style={{
                                backgroundColor: '#F5CD25', width: 90, height: 26, position: 'absolute', top: 125, right: 40,alignItems:'center',justifyContent:'center',borderRadius:5}}>
                                <Text style={{fontSize:10,fontWeight:'bold'}}>ORDER NOW</Text>
                                
                                </View>
                        </ImageBackground>

                    </View>

                    <View style={{ flexDirection: 'row', backgroundColor: 'transparent', width: wp(100), height: hp(4), marginTop: 10,justifyContent:'center',alignItems:'center',justifyContent:'space-between'}}>
                        <Text style={{ fontSize: 12, fontWeight: 'bold',paddingLeft:35 }}>Mast Salet</Text>
                        <Text style={{fontSize:12,fontWeight:'400',paddingRight:35}}>26 places</Text>

                    </View>

                    <View style={{ backgroundColor: 'transparent', width: wp(100), height:400, marginTop: 1,}}>

                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            bounces={false}
                            


                            data={dummy4}

                            renderItem={({ item }) =>

                                <View style={{
                                    backgroundColor: 'white', flexDirection: 'row', width: 363, height: 105, alignSelf: 'center', borderRadius: 20, margin: 15, position: 'relative',shadowOffset: {width: 1.5,height: 1.5},shadowOpacity: 1,shadowRadius: 3,shadowColor: 'gray', }}>
                                    <Image source={item.img}
                                        style={{ width: 194, height: 105, }}
                                    ></Image>

                                    <Text style={{ paddingTop: 10, paddingLeft: 5, fontSize: 14, fontWeight: 'bold' }}>{item.section4}</Text>
                                    <Text style={{position:'absolute',top:35,left:200,color:'gray',fontSize:12}}>{item.section7}</Text>
                                    <View style={{ width: 61, height: 15, backgroundColor: '#343A40', position: 'absolute', top: 10, left: 10, borderRadius: 3,alignItems:'center',justifyContent:'center' }}>
                                        <Text style={{fontSize:12,color:'white'}}>Promoted</Text>
                                    </View>

                                    <View style={{ flexDirection:'row',width: 30, height: 18, backgroundColor: '#28A745', position: 'absolute',right:180,bottom:15,borderRadius:3,alignItems:'center',justifyContent:'center' }}>
                                        <Image source={item.img2}
                                            style={{ width: 10, height: 9 }}></Image>
                                        <Text style={{fontSize:8,paddingLeft:2,color:'white'}}>{item.section6}</Text>
                                    </View>
                                   
                                    <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'transparent',width:100,height:20,position:'absolute',left:200,top:55}}>
                                        <Image source={item.img3}
                                            style={{ width: 14, height: 14, }}></Image>
                                        <Text style={{paddingLeft:5,fontSize:10,color:'gray'}}>{item.section8}</Text>
                                    </View>
                                    
                                    <View style={{ flexDirection:'row',backgroundColor: 'transparent', width: 150, height: 25, position: 'absolute', top: 75, left: 200,alignItems:'center' }}>
                                        <View style={{ backgroundColor: item.color, width: 42, height: 15, alignItems:'center',justifyContent:'center',borderRadius:5,marginLeft:0}}>
                                            <Text style={{fontSize:10,fontWeight:'bold',color:'white',}}>{item.section9}</Text>
                                        </View>
                                        <Text style={{fontSize:10,fontWeight:'bold',paddingLeft:10,color:'gray'}}>{item.section10}</Text>
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
export default Home;
const styles = StyleSheet.create({
    location: {
        fontSize: 15,
        paddingLeft: 10,
        fontWeight: 'bold'

    },
    Search: {

        width: wp(80),
        height: hp(6),
        marginTop: 25,
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 15,
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        shadowRadius: 3,
        shadowOpacity: 1,
        shadowColor: 'gray',
        shadowOffset: {
            width: 1.5,
            height: 1.5
        },


    },
    textStyle: {
        marginLeft: 25,
        paddingTop: 5,
        fontWeight: 'bold',
        fontSize: 10,
        alignSelf: 'center'
    },
    textStyle4: {
        paddingLeft: 10,
        paddingTop: 5,
        fontWeight: 'bold',
        fontSize: 17
    },


    textStyle1: {
        paddingLeft: 10,
        paddingTop: 5,
        fontWeight: 'bold',
        fontSize: 10,
        color: 'grey'

    },
    viewStyle: {
        backgroundColor: 'white',
        marginLeft: 15,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        shadowOffset: {
            width: 1.5,
            height: 1.5
        },
        shadowOpacity: 1,
        shadowRadius: 3,
        shadowColor: 'gray',
        marginTop: 5,
        bottom: 5,
        height:320
    },
    
        
    








})