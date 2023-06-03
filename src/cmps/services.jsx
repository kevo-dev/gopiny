import Image from "next/image"
import icon1 from '../imgs/icon-1.png'
import icon2 from '../imgs/icon-2.png'
import icon3 from '../imgs/icon-3.png'
import icon4 from '../imgs/icon-4.png'
import icon5 from '../imgs/icon-5.png'
import icon6 from '../imgs/icon-6.png'

function Services() {
    return (
        <section className="services">
            <h1 className="heading-title">our services</h1>
            <div className="box-container">
                <div className="box">
                    <div className="img-container">
                        <Image src={icon1} fill alt="" />
                    </div>
                    <h3>adventure</h3>
                </div>
                <div className="box">
                    <div className="img-container">
                        <Image fill src={icon2} alt="" />
                    </div>
                    <h3>sunrise Cruises</h3>
                </div>
                <div className="box">
                    <div className="img-container">
                        <Image fill src={icon3} alt="" />
                    </div>
                    <h3>cultural tours</h3>
                </div>
                <div className="box">
                    <div className="img-container">
                        <Image fill src={icon4} alt="" />
                    </div>
                    <h3>nature excursions</h3>
                </div>
                <div className="box">
                    <div className="img-container">
                        <Image fill src={icon5} alt="" />
                    </div>
                    <h3>historical sites</h3>
                </div>
                <div className="box">
                    <div className="img-container">
                        <Image fill src={icon6} alt="" />
                    </div>
                    <h3>wildlife encounters</h3>
                </div>
            </div>
        </section>
    )
}

export default Services