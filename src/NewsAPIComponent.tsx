import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, Image, ActivityIndicator } from 'react-native'

interface NewsAPI {
  source: { 
    id: string; 
    name: string; 
  }
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: Date;
  content: string;
}

const NewsAPIComponent = () => {
  const initaialArray: NewsAPI[] = [];

  const [news, setNews] = useState(initaialArray); 
  const [loaderBool, setLoaderBool] = useState(true);

  const newsUrl = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0e9c0fa5ae1c471a8677099743999f7f";
  const getNews = async () => {
    try {
      let response = await fetch(newsUrl);
      let jsonResponse = await response.json();
      setNews(jsonResponse['articles']);
      setLoaderBool(false);
    } catch(error) {
      // console.error(">>> Something Went Wrong!! ");
      console.error(error);    
      setLoaderBool(false);
    }
  }

  const renderItem = ({ item }: { item: NewsAPI }) => (
    <View>
      <Image source={{
        uri: item.urlToImage,
        height: 128,
        width: 128
      }} />
      <Text>{ item.title }</Text>
    </View>
  );

  useEffect(() => {
    getNews();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      { loaderBool ? <ActivityIndicator size="large" /> : <FlatList data={news} renderItem={renderItem} keyExtractor={(item, idx) => item.source.id} /> }
    </View>
  );
}

export default NewsAPIComponent
