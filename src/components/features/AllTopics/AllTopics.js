import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import styles from './AllTopics.module.scss';
import { FaForward, FaBackward} from 'react-icons/fa';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';




function   AllTopics() {

// // Obsługa dotku// 
// const [x, setX] = useState(0);
// const [startX, setStartX] = useState(0);
// const [endX, setEndX] = useState(0);

// const productSlider = useRef();

// const handleTouchStart = (e) => {
//   setStartX(e.touches[0].clientX);
// };

// const handleTouchEnd = (e) => {
//   setEndX(e.changedTouches[0].clientX);
//   setX(endX - startX);

//   if (x > 50) {
//     leftB();
//   } else if (x < -50) {
//     rightB();
//   }
// };

// useEffect(() => {
//   productSlider.current.addEventListener('touchstart', handleTouchStart);
//   productSlider.current.addEventListener('touchend', handleTouchEnd);

//   return () => {
//     productSlider.current.removeEventListener('touchstart', handleTouchStart);
//     productSlider.current.removeEventListener('touchend', handleTouchEnd);
//   };
// }, []);


//Dalej//

  const topics = useSelector(state => state.topics)
  let clicked = '' 
  let element = document.body;
  let pageWidth =getComputedStyle(element).width.slice(0,-2);
  let pageWidthWithaoutArrow = pageWidth - (0.10 * pageWidth)

  const leftB = () =>{
    clicked -=1
    const leftArrow = document.getElementById('productSlider')

    if(clicked === -1){
    }else{
      leftArrow.scrollLeft -= pageWidthWithaoutArrow
    }
  }

  const rightB =() =>{
    clicked +=1

    const leftArrow = document.getElementById('productSlider')
      leftArrow.scrollLeft += pageWidthWithaoutArrow
    
  }  
   
  return (
    
    <div className={styles.productContainer}>
      <button onClick={leftB} className={clsx(styles.left , styles.arrowB)}><FaBackward/></button>
      <div id= 'productSlider' className={styles.productCards}>
        {topics.map(topic=>
        <Card key={topic.id} style={{ height: '29rem', width: '24rem' ,border: '0px solid white', margin: ' 1.3rem', padding: '1%', borderRadius: '5%', minWidth: '28%'}}>
            <Card.Img style={{maxWidth: '100%' }}variant="top" src={`${process.env.PUBLIC_URL}/topicImg/${topic.title}.png`} />
            <Card.Body style={{position: 'relative'}}>
              <Card.Title style={{textAlign: 'center', color:'#f69720'}}><h2>{topic.title}</h2></Card.Title>
              <Card.Text>
                {topic.description}
              </Card.Text>
            </Card.Body>
            <div>
                            <div class={styles.wrapper}>
                <div class={styles.link_wrapper}>
                  <NavLink to={'/opis/' + topic.id}>Więcej informacji</NavLink>
                  <div class={styles.icon}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                      <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
        </Card>)} 
      </div>
      <button onClick={rightB} className={clsx(styles.right , styles.arrowB)}><FaForward/></button>
    </div>
  );
}

export default AllTopics;