import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const Edit = () =>{
    const {id} = useParams();
    const topic =useSelector(store => store.topics.find(t=> t.id === id));

    const [title, setTitle] = useState(topic.title);
    const [description, setDescription] = useState(topic.description);
    const [descryptionTwo,setDescryptionTwo] = useState(topic.descryptionTwo);
    const [lvl, setLvl] = useState(topic.lvl);
    //const [img, setImg] = useState()

    const maxLvl = Object.keys(lvl).length
    console.log('lvl', lvl)

    const pushToLvl = (lv, value) => {
        setLvl(prevState => {
          const newLvl = { ...prevState };
          const [field, index] = lv.split("-");
          newLvl[field][index] = { ...newLvl[field][index], name: value };
          console.log('lvl', lvl)
          return newLvl;   
        });
      };


    const textAreaForLvl = () => {

        return(
            Object.keys(lvl).map(lv=>
                <>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>{}</Form.Label>
                        <Form.Control as="textarea" rows={1} value={lv}/>
                    </Form.Group>
                    {topic.lvl[lv].map(l=>                   
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            {}
                            <Form.Control as="textarea" rows={1} value={Object.values(l).join("")} onChange={(e)=>pushToLvl(lv,e.target.value)} />
                        </Form.Group>)
                    }     
                </>    
            )
        )
    }
  
    return(
        <>
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Nazwa</Form.Label>
                    <Form.Control as="textarea" rows={1} value={title}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>opis 1</Form.Label>
                    <Form.Control as="textarea" rows={2}  value={description}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>dokładny opis</Form.Label>
                    <Form.Control as="textarea" rows={3}  value={descryptionTwo}/>
                </Form.Group>
                {textAreaForLvl()}
                {/* <Form.Group controlId="formFileSm" className="mb-3">
                    <Form.Label>obraz </Form.Label>
                    <Form.Control type="file" size="sm"  value={}/>
                </Form.Group> */}
            </Form>
        </div>
      </>  
    )
}
export default Edit;