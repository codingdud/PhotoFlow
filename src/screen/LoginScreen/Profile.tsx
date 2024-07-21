import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useTheme } from '@react-navigation/native';
import { useStateContext } from '../../hooks/contex';

const Profile = () => {
  const{logout}=useStateContext()

  const { colors } = useTheme();
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    phone: yup.string().required(),
    website: yup.string().url().required(),
    location: yup.string().required(),
  });

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // Handle form submission logic here
    console.log(data);
  };

  return (
    <ScrollView style={[styles.container,{backgroundColor:colors.background}]}>
      <View style={styles.profileSection}>
        <Image
          source={{ uri:'https://i.ibb.co/x1qtCXL/animeshp.jpg' }}
          style={styles.profileImage}
        />
        <Text style={[styles.profileName,{color:colors.text}]}>Victoria Heard</Text>
        <Text style={[styles.profileActive,{color:colors.text}]}>Active since - Jul, 2019</Text>
      </View>
      <View style={styles.section}>
        <Text style={[styles.sectionTitle,{color:colors.text}]}>Personal Information</Text>
        <TouchableOpacity 
        style={styles.editButton}
        onPress={handleSubmit(onSubmit)}
        >
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.infoItem,{backgroundColor:colors.card}]}>
        <Icon name="envelope" size={20} color={colors.text} />
        <Controller
          control={control}
          render={({ field }) => (
            <TextInput
              style={[styles.infoText,{color:colors.text}]}
              placeholder="Email"
              onChangeText={field.onChange}
              value={field.value}
            />
          )}
          name="email"
          defaultValue="heard_j@gmail.com"
        />
      </View>
      {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}
      <View style={[styles.infoItem,{backgroundColor:colors.card}]}>
        <Icon name="phone" size={20} color={colors.text} />
        <Controller
          control={control}
          render={({ field }) => (
            <TextInput
              style={[styles.infoText,{color:colors.text}]}
              placeholder="Phone"
              onChangeText={field.onChange}
              value={field.value}
            />
          )}
          name="phone"
          defaultValue="9898712132"
        />
      </View>
      {errors.phone && <Text style={styles.errorText}>{errors.phone.message}</Text>}
      <View style={[styles.infoItem,{backgroundColor:colors.card}]}>
        <Icon name="globe" size={20} color={colors.text} />
        <Controller
          control={control}
          render={({ field }) => (
            <TextInput
              style={[styles.infoText,{color:colors.text}]}
              placeholder="Website"
              onChangeText={field.onChange}
              value={field.value}
            />
          )}
          name="website"
          defaultValue="www.randomweb.com"
        />
      </View>
      {errors.website && <Text style={styles.errorText}>{errors.website.message}</Text>}
      <View style={[styles.infoItem,{backgroundColor:colors.card}]}>
        <Icon name="map-marker" size={20} color={colors.text} />
        <Controller
          control={control}
          render={({ field }) => (
            <TextInput
              style={[styles.infoText,{color:colors.text}]}
              placeholder="Location"
              onChangeText={field.onChange}
              value={field.value}
            />
          )}
          name="location"
          defaultValue="Antigua"
        />
      </View>
      {errors.location && <Text style={styles.errorText}>{errors.location.message}</Text>}
      <View style={{marginBottom:30}}>
        <View style={styles.section}>
            <Text style={[styles.sectionTitle,{color:colors.text}]}>Utilities</Text>
        </View>
        <TouchableOpacity style={[styles.utilityItem,{backgroundColor:colors.card}]}>
            <View style={styles.utilityItemContent}>
            <Icon name="download" size={20} color={colors.text} />
            <Text style={[styles.utilityText,{color:colors.text}]}>Downloads</Text>
            </View>
            <Icon name="chevron-right" size={20} color={colors.text} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.utilityItem,{backgroundColor:colors.card}]}>
            <View style={styles.utilityItemContent}>
            <Icon name="line-chart" size={20} color={colors.text} />
            <Text style={[styles.utilityText,{color:colors.text}]}>Usage Analytics</Text>
            </View>
            <Icon name="chevron-right" size={20} color={colors.text} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.utilityItem,{backgroundColor:colors.card}]}>
            <View style={styles.utilityItemContent}>
            <Icon name="question-circle" size={20} color={colors.text}/>
            <Text style={[styles.utilityText,{color:colors.text}]}>Ask Help-Desk</Text>
            </View>
            <Icon name="chevron-right" size={20} color={colors.text}/>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={logout}
        style={[styles.utilityItem,{backgroundColor:colors.card}]}>
            <View style={styles.utilityItemContent}>
            <Icon name="sign-out" size={20} color={colors.text} />
            <Text style={[styles.utilityText,{color:colors.text}]}>Log-Out</Text>
            </View>
            <Icon name="chevron-right" size={20} color={colors.text} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
    padding: 15,
  },
  profileSection: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
  profileActive: {
    color: '#FFFFFF',
    fontSize: 16,
    marginTop: 5,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  editButton: {
    backgroundColor: '#6200EE',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  editButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
    paddingLeft: 15,
    borderRadius: 10,
    marginBottom: 5,
  },
  infoText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginLeft: 10,
    flex: 1,
  },
  utilityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1A1A1A',
    padding: 13,
    borderRadius: 10,
    marginBottom: 5,
  },
  utilityItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  utilityText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginLeft: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 5,
  },
});

export default Profile;
