import React from 'react';
import {View, Image, Text, TextInput} from 'react-native';

import {Arlene} from '../../assets/images/';
import {Search as SearchIcon, Filter} from '../../assets/icons';
import {style} from './style';

const Search = () => {
  const searchData = [
    {
      id: 0,
      name: 'Arlene Mckinney',
      photo: Arlene,
      posted: '3 days ago',
      title: 'Create an application',
      desc:
        'We are a young startup from Paris looking for a designer who can help us design a tech oriented application. We are open to proposals.',
      total: 16,
      price: 2400,
      category: ['UI/UX', 'DESIGN', 'FIGMA', 'PHOTOSHOP'],
    },
  ];

  const NewProject = ({
    photo,
    name,
    posted,
    title,
    desc,
    total,
    price,
    category,
  }) => {
    return (
      <View style={style.cardContainer}>
        <View style={style.wrapCard}>
          <View style={style.profileContainer}>
            <View style={style.wrapProfile}>
              <Image source={photo} style={style.profileImg} />
              <Text style={style.name}>{name}</Text>
            </View>
          </View>
          <View style={style.cardContent}>
            <Text style={style.time}>Posted {posted}</Text>
            <Text style={style.title}>{title}</Text>
            <Text style={style.descTitle}>Description</Text>
            <Text style={style.description}>{desc}</Text>
            <View style={style.payment}>
              <Text style={style.total}>{total} proportions</Text>
              <Text style={style.price}>${price}</Text>
            </View>
            <View style={style.categoryContainer}>
              {category.map((a, index) => (
                <View style={style.category} key={index}>
                  <Text style={style.categoryText}>{a}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={style.container}>
      <Text style={style.search}>Search</Text>
      <View style={style.textInputContainer}>
        <TextInput style={style.textInput} />
        <Image source={SearchIcon} style={style.searchIcon} />
      </View>
      <View style={style.filter}>
        <Image source={Filter} />
        <Text style={style.filterText}>Filters</Text>
      </View>
      {searchData.map((s) => (
        <View style={style.cardContainer} key={s.id}>
          <NewProject {...s} />
        </View>
      ))}
    </View>
  );
};

export default Search;
