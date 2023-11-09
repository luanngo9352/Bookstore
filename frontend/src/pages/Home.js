import React from 'react'
import bookimg from '../images/main_banner.png'
import book2img from '../images/Book2.jpg'
import book3img from '../images/Book3.jpg'
import book4img from '../images/Book5.jpg'
import book5img from '../images/tieuthuyet.jpg'
import book6img from '../images/vanhoc.jpg'
import book7img from '../images/thieunhis.jpg'
import book8img from '../images/kinhte.jpg'
import book9img from '../images/ngontinh.jpg'
import book10img from '../images/tamli.jpg'
import book11img from '../images/manga1.png'
import book12img from '../images/hikari-resized-img.png'
import book13img from '../images/ipm-resized-img.png'
import book14img from '../images/amak-resized-img.png'
import book15img from '../images/kimdong-resized-img.png'
import book16img from '../images/sakura-resized-img.png'
import book17img from '../images/skybook-resized-img.png'
import book18img from '../images/tsuki-resized-img.png'
import book19img from '../images/cambrig-resized-img.png'
import book20img from '../images/cengage-resized-img.png'
import book21img from '../images/hachitte-resized-img.png'
import book22img from '../images/oxford-resized-img.png'
import book23img from '../images/happerresized-img.png'
import Marquee from "react-fast-marquee";
import Homescreen from '../screens/HomeScreen'
import { Link } from 'react-router-dom'

// const listItem = [{name:'example',thumbnail:book5img},
// {name:'example1',thumbnail:book6img},{name:'example2',thumbnail:book7img},{name:'example3',thumbnail:book8img},,{name:'example3',thumbnail:book9img},,{name:'example3',thumbnail:book10img},{name:'example3',thumbnail:book11img}]
const Home = () => {
  return (
    <>
    <section className='home-wrapper-1 py-5'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-6'>
                    <div className='main-banner position-relative'> 
                        <img src={bookimg} className ="img-fuild rounded-3"alt='main banner' />
                    </div>
                </div>
                <div className='col-6'>
                <div className= 'd-flex flex-nowrap gap-10 justify-content-between align-items-center'>  
                        <div className='small-banner position-relative '> 
                            <img src={book2img} className ="img-fuild rounded-3"alt='main banner' />
                        </div>
                        <div className='small-banner position-relative '> 
                            <img src={book3img} className ="img-fuild rounded-3"alt='main banner' />
                        </div>
                        <div className='small-banner position-relative '> 
                            <img src={book4img} className ="img-fuild rounded-3"alt='main banner' />
                        </div>
                </div>
                </div>
            </div>
        </div>
    </section>
    <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
            <div className='col-12 categories'>
            <span className='header-tile' >Danh Mục Sản Phẩm</span>
            </div>
             <div className='row'>
                <div className='col-12'>
                    <div className='categories d-flex justify-content-between align-items-center'>
                        <div className='fhs_nowrap_two fhs_center_center'>
                            <div>
                                <h6 style={{marginLeft: "6px"}}>Tiểu Thuyết </h6>
                            </div>
                            <img src={book5img} alt='novel' />
                        </div>
                        <div className='fhs_nowrap_two fhs_center_center'>
                            <div>
                                <h6 style={{marginLeft: "20px"}}>Văn Học </h6>
                            </div>
                            <img src={book6img} alt='literature' />
                        </div>
                        <div className='fhs_nowrap_two fhs_center_center'>
                            <div>
                                <h6 style={{marginLeft: "15px"}}>Thiếu Nhi</h6>
                            </div>
                            <img src={book7img} alt='child'/>
                        </div>
                        <div className='fhs_nowrap_two fhs_center_center'>
                            <div>
                                <h6 style={{marginLeft: "24px"}}>Kinh Tế</h6>
                            </div>
                            <img src={book8img} alt='economy' />
                        </div>
                        <div className='fhs_nowrap_two fhs_center_center'>
                            <div>
                                <h6 style={{marginLeft: "12px"}}>Ngôn Tình</h6>
                            </div>
                            <img src={book9img} alt='love' />
                        </div>
                        <div className='fhs_nowrap_two fhs_center_center'>
                            <div>
                                <h6 style={{marginLeft: "25px"}}>Tâm Lí</h6>
                            </div>
                            <img src={book10img} alt='mentality' />
                        </div>
                        <div className='fhs_nowrap_two fhs_center_center'>
                            <div>
                                <h6 style={{marginLeft: "25px"}}>Manga</h6>
                            </div>
                            <img src={book11img} alt='mentality' />
                        </div>  
                    </div>
                </div>
             </div>
           
        </div>
    </section>
    {/* <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
             <div className='row'>
                <div className='col-12'>
                    <div className='categories d-flex justify-content-between align-items-center'>
                    {listItem.map(item => (
                     <div className='item'>
                    <span>
                    {item.name}
                    </span>
                    <div className='thumbnail'>
                        <img src={item.thumbnail }>
                        </img>
                    </div>
                    </div>
                ))}
                    </div>
                </div>
             </div>
           
        </div>
    </section> */}
     <section className='list-products py-5 '>
            <div className='col-12 categories'>
                <div className='header-tile' >
                    <span className='header-tile-product'>Sản Phẩm</span>
                </div>
            </div>
            <Homescreen />
    <div className='col-12 button-home'>
        <Link to={ '/all-product'}>
    <button type="button" class="btn btn-primary d-flex justify-content-center ">Primary</button>
        </Link>
    </div>
    </section>
    <section className='marque-wrapper py-5'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-12'>
                    <div className='marque-inner-wrapper card-wrapper'>
                        <Marquee className='d-flex'>
                           <div className='max-4 w25'>
                            <img src={book12img} alt='brand'/>
                           </div>
                           <div className='max-4 w25'>
                            <img src={book13img} alt='brand'/>
                           </div>
                           <div className='max-4 w25'>
                            <img src={book14img} alt='brand'/>
                           </div>
                           <div className='max-4 w25'>
                            <img src={book15img} alt='brand'/>
                           </div>
                           <div className='max-4 w25'>
                            <img src={book16img} alt='brand'/>
                           </div>
                           <div className='max-4 w25'>
                            <img src={book17img} alt='brand'/>
                           </div>
                           <div className='max-4 w25'>
                            <img src={book18img} alt='brand'/>
                           </div>
                           <div className='max-4 w25'>
                            <img src={book19img} alt='brand'/>
                           </div>
                           <div className='max-4 w25'>
                            <img src={book20img} alt='brand'/>
                           </div>
                           <div className='max-4 w25'>
                            <img src={book21img} alt='brand'/>
                           </div>
                           <div className='max-4 w25'>
                            <img src={book22img} alt='brand'/>
                           </div>
                           <div className='max-4 w25'>
                            <img src={book23img} alt='brand'/>
                           </div>
                        </Marquee>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}

export default Home