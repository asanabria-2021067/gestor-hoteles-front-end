import React from 'react'

export const Footer = () => {
    return (
        <>
            <div className="mt-5 pt-5 pb-5 footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-xs-12 about-company">
                            <h2>HotelSelecto</h2>
                            <p className="pr-5 text-white-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante mollis quam tristique convallis </p>
                        </div>
                        <div className="col-lg-3 col-xs-12 links">
                            <h4 className="mt-lg-0 mt-sm-3">Nuestras redes</h4>
                            <ul className="m-0 p-0">
                                <li>- <a href="#">Instagram</a></li>
                                <li>- <a href="#">Facebook</a></li>
                                <li>- <a href="#">Twitter</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-xs-12 location">
                            <h4 className="mt-lg-0 mt-sm-4">Contactanos</h4>
                            <p>22, Lorem ipsum dolor, consectetur adipiscing</p>
                            <p lassName="mb-0"><i className="fa fa-phone mr-3"></i>(502) 2324-2890</p>
                            <p><i className="fa fa-envelope-o mr-3"></i>info@hotelSelecto.com</p>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col copyright">
                            <p className=""><small className="text-white-50">© 2023. All Rights Reserved.</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
