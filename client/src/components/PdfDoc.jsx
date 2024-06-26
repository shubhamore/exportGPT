import React from 'react';
import { Page, Text, View, Document, StyleSheet,Link } from '@react-pdf/renderer';
import Markdown from "react-markdown";

// Create styles
const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        // fontFamily: 'Oswald'
    },
    author: {
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 40,
    },

    text: {
        margin: 12,
        fontSize: 14,
        textAlign: 'justify',
        fontFamily: 'Times-Roman'
    },

    header: {
        // fontSize: 12,
        // marginBottom: 20,
        // textAlign: 'center',
        // color: 'grey',
        position: 'absolute',
        fontSize: 12,
        bottom: 30,
        // left: 0,
        right: 10,
        textAlign: 'center',
        color: 'grey',
    },
    pageNumber: {
        position: 'absolute',
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: 'center',
        color: 'grey',
    },
    link:{
        color: 'grey'
    }
});

// Create Document Component
export default function PdfDoc({ conversation,title }) {
    return (
        <Document style={styles.doc}>
            <Page size="A4" style={styles.body}>
                <Text style={styles.header} fixed>
                    ~ Created by <Link style={styles.link} src="https://exportgpt.onrender.com/">ExportGPT</Link> ~
                </Text>
                <Text style={styles.title}>{title}</Text>
                <View>
                    {conversation.map((conv, index) => {
                        return (
                            <div key={index} style={styles.text}>
                                {/* <Text>Role : {conv.message.author.role}</Text>
                                <br /> */}
                                {/* {console.log(conv)} */}
                                {conv&&conv.message&&conv.message.content&&conv.message.content.parts&&<><Text>{conv.message.content.parts[0]}</Text>
                                <hr /></>}
                            </div>
                        )
                    })}
                </View>
                <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
            </Page>
        </Document>
    )
};