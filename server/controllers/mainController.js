

const getConversation = async (req, res) => {
    const gpturl = req.query.gpturl;

    if (!gpturl) {
        return res.status(400).json({ error: 'Missing gpturl parameter' });
    }

    try {
        const response = await fetch(gpturl);
        const html = await response.text();
        const startTag = '<script id="__NEXT_DATA__" type="application/json" crossorigin="anonymous">';
        const endTag = '</script>';
        const startIndex = html.indexOf(startTag) + startTag.length;
        const endIndex = html.indexOf(endTag, startIndex);
        const jsonDataText = html.substring(startIndex, endIndex);
        const jsonData = JSON.parse(jsonDataText);
        const conversation = jsonData.props.pageProps.serverResponse.data.linear_conversation.slice(2);
        // console.log(conversation)
        const title= jsonData.props.pageProps.serverResponse.data.title;
        res.json({conversation,title});
        // res.send({"status":"working on it bro"})
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Error fetching data' });
    } finally {
        console.log('getConversation function called')
    }
}

const test=()=>{
    res.send("working")
}

module.exports = {
    getConversation,
    test
}