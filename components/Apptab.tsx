import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface IAppTab {
    title: string;

    focused: boolean;
    children: React.ReactNode;
}

const AppTab = ({ title, focused, children }: IAppTab) => {
    return (
        <View style={{ alignItems: "center" }}>

            {children}
            <Text style={{
                color: focused ? "#019FDE" : "#84898B",
                fontSize: 12,
                fontWeight: '600',
            }}>
                {title}
            </Text>
        </View>
    );
};

export default AppTab;

