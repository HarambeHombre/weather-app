import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

const Page = () => {
    const {id} = useLocalSearchParams<{id: string}>();
    return (
        <View>
            <Text>Booking: {id}</Text>
        </View>
    )
}

export default Page;