import { useEffect, useState } from "react";
import styles from "../css/projects.module.css";
import axios from "axios";

const Projects = () => {
    const [DataList, setDataList] = useState('')
    useEffect(() => {
        axios.get("http://localhost:3000/projectData/").then((res) => {
            setDataList(res.data)
            // console.log(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    // console.log(DataList)
    return (
        <div className={styles.parent}>
            <div className={styles.heading}>
                <h1>Projects</h1>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</p>
            </div>
            <div className={styles.cards}>
                {DataList && DataList.map((ele)=>{
                    return(
                        <div className={styles.card}>
                            <div className={styles.cardimage}></div>
                            <div className={styles.cardcontent}>
                                <div className={styles.cardtext}>
                                    <h5>{ele.tittle}</h5>
                                    <p>{ele.text}</p>
                                </div>
                                <div className={styles.cardtools}>
                                    {ele.tools && ele.tools.map((e)=>{
                                        return(
                                            <div>{e}</div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects;