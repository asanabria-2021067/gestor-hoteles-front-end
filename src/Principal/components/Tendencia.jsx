import React from 'react'

export const Tendencia = () => {
    return (
        <>
        <br />
            <div className='container'>
                <h2>Tendencias del momento</h2>
                <br />
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-100">
                            <img src="./src/assets/hotel1.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-body-secondary">Last updated 3 mins ago</small>
                                </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="./src/assets/hotel4.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-body-secondary">Last updated 3 mins ago</small>
                                </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="./src/assets/hotel2.webp" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-body-secondary">Last updated 3 mins ago</small>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
