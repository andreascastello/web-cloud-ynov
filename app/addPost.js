import {useState} from "react";
import {Pressable, Text, TextInput, View} from 'react-native';
import {createPost} from "../firebase/add_post_data";


const AddPost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    return (
        <View style={styles.form}>
            <Text style={styles.h2}>🚀 Add a post</Text>
            <Text style={styles.label}>Title</Text>
            <TextInput
                onChangeText={setTitle}
                value={title}
                style={styles.input}
            />
            <Text style={styles.label}>Content</Text>
            <TextInput
                onChangeText={setContent}
                value={content}
                style={styles.input}
            />
            <Pressable onPress={() => createPost(title, content)} style={styles.button}>
                <Text style={styles.text}>Add Post !</Text>
            </Pressable>
        </View>
    );
}