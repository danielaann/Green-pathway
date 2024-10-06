import React from "react";
import NavBar from "../Navigation/NavBar"

const SelectQuiz = () => {
    return <>
        <NavBar />
        <div className="row justify-content-center mx-5">
            <div className="col-md-12 mt-5">
                <h1 className="display-2 fw-bold mb-4 text-center text-black pt-10"><i>Quiz time</i></h1>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body" style={{backgroundColor:'lavender'}}>
                                <h5 class="card-title">Energy</h5>
                                <p class="card-text">Learn about renewable and non-renewable energy sources. Understand how energy consumption impacts the environment.</p>
                                <a href="./quiz1" class="btn btn-primary" style={{backgroundColor:'black'}}>Start Now</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body" style={{backgroundColor:"lightyellow"}}>
                                <h5 class="card-title">Recycle</h5>
                                <p class="card-text">Explore the benefits of recycling and how it reduces waste. Discover how proper recycling can conserve resources and lower pollution.</p>
                                <a href="./quiz2" class="btn btn-primary" style={{backgroundColor:'black'}}>Start Now</a>
                            </div>
                        </div>
                    </div>
                </div>

                <br />
                <div class="row">
                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body" style={{backgroundColor:'lightskyblue'}}>
                                <h5 class="card-title">Water</h5>
                                <p class="card-text"> Understand the importance of preserving water resources. Learn ways to reduce water wastage in everyday life.</p>
                                <a href="./quiz3" class="btn btn-primary" style={{backgroundColor:'black'}}>Start Now</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body" style={{backgroundColor:'lightpink'}}>
                                <h5 class="card-title">Sustainable</h5>
                                <p class="card-text"> Find out how to live in harmony with nature. Get tips on reducing your carbon footprint and leading a more eco-friendly lifestyle.</p>
                                <a href="./quiz4" class="btn btn-primary" style={{backgroundColor:'black'}}>Start Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default SelectQuiz;
