import React, {useState, useEffect} from 'react';
import axios from 'axios'

const TestUseEffect = () => {

    const [info, setInfo] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:4000/users")
        .then((res) => {
            setInfo(res.data)
        })
    }, [])

    useEffect(() => {
        const getData = async() => {
            const {data} = await axios.get("http://localhost:4000/users")
            setInfo(data)
        }
        getData()
    }, [])


    useEffect(() => {
        setTimeout(() => {
            setLoading(true)
        }, 3000)
    }, [])

    
  return (
    <div>
        <h2>useEffect</h2>
        {
            loading === false
            ? <p>로딩중...</p>
            : info.map((item, index) => {
                return (
                    <ul key={index}>
                        <li>
                            {item.userName}
                        </li>
                    </ul>
                )
            })
        }
    </div>
  )
};

export default TestUseEffect;