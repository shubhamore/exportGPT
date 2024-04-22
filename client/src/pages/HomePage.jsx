import React, { useEffect, useState } from 'react'
// import ExportPage from './ExportPage'
// import { useNavigate } from 'react-router-dom'
import { PDFViewer,PDFDownloadLink } from '@react-pdf/renderer';
import PdfDoc from '../components/PdfDoc';
import NavBar from '../components/NavBar';
import { toast } from "react-toastify"

export default function HomePage() {
    // const navigate=useNavigate()
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [show, setShow] = useState(false)
    const [url, setUrl] = useState('')
    const getConversation = async (url_link) => {
        setLoading(true)
        fetch(`${import.meta.env.VITE_BACKEND_URL}/getConversation/?gpturl=${url_link}`)
            .then(response => response.json())
            .then(d => setData(d))
            .then(() => { setShow(true); setLoading(false) })
        console.log('getConversation function called')
        // navigate('/export')
    }
    const tryDemo = async () => {
        getConversation('https://chat.openai.com/share/4e7e4604-3e42-4b95-9ca0-b88b359729d6')
    }
    // useEffect(() => {
    //     console.log(url)
    // }, [url])
    // useEffect(() => {
    //     console.log(data)
    // }, [data])
    useEffect(() => {
        toast.info('Initial requests may experience slight delays due to our free tier deployment.', {
            position: "top-center",
            autoClose: 7500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }, [])

    return (
        <div className='min-h-screen bg-black text-white pb-10'>
            <NavBar />
            <div className='container mx-auto'>
                {loading ? <div className='text-5xl m-auto text-center my-20'>Loading...</div> :
                    (<div>
                        <h1 className='font-bold text-4xl text-center py-11'>Convert your ChatGPT conversation to a PDF</h1>
                        <form className='mx-auto max-w-screen-lg' onSubmit={(e) => { e.preventDefault(); getConversation(url) }}>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input type="url" value={url} onChange={(e) => setUrl(e.target.value)} className="block w-full p-4 ps-10 text-sm border  rounded-lg  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Enter Conversation URL" required />
                                <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                            </div>
                        </form>
                        <div class="inline-flex items-center justify-center w-full">
                            <hr class="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                            <span class="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">OR</span>
                        </div>
                        <button onClick={tryDemo} className="block text-white mx-auto  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Try Demo</button>
                        {show &&
                            (<div className='mx-auto text-center'>
                                <PDFViewer className='w-full h-screen max-w-screen-lg mx-auto my-10'>
                                    <PdfDoc conversation={data.conversation} title={data.title} />
                                </PDFViewer>
                                <PDFDownloadLink document={<PdfDoc conversation={data.conversation} title={data.title} />} fileName={`${data.title}_exportGPT.pdf`} class="mx-auto inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                                    <span class="px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                        Download PDF
                                    </span>
                                </PDFDownloadLink >
                            </div>
                            )}
                    </div>)
                }
            </div>
        </div>
    )
}
