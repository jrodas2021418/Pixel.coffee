

 const Blog = () =>{
        return(
            <section className="blog section" id="blog">
            <div className="blog__container container">
              <h2 className="section__title">
                Our blogs coffee with <br />
                insightful topic
              </h2>
    
              <div className="blog__content grid">
                <article className="blog__card">
                  <div className="blog__image">
                    <img src="./media/blog1.jpg" alt="" className="blog__img" />
                    <a href="#" className="blog__button">
                      <i className="bx bx-right-arrow-alt"></i>
                    </a>
                    <div className="blog__stats">
                      <div className="blog__reaction">
                        <i className="bx bx-comment"></i>
                        <span>12</span>
                      </div>
                      <div className="blog__reaction">
                        <i className="bx bx-show"></i>
                        <span>76,5k</span>
                      </div>
                    </div>
                  </div>
    
                  <div className="blog__data">
                    <h2 className="blog__title">coffee helps keep you alert</h2>
                    <p className="blog__description">
                    The feeling of energy that we notice when we drink a cup of coffee 
                    in the morning is due to thefact that coffee stimulates the increase of substances such as dopamine,
                    which accelerate our brain activity. This acceleration makes us stay alert and awake for longer.
                    </p>
                  </div>
                </article>
                <article className="blog__card">
                  <div className="blog__image">
                    <img src="./media/blog2.jpg" alt="" className="blog__img" />
                    <a href="#" className="blog__button">
                      <i className="bx bx-right-arrow-alt"></i>
                    </a>
                    <div className="blog__stats">
                      <div className="blog__reaction">
                        <i className="bx bx-comment"></i>
                        <span>96</span>
                      </div>
                      <div className="blog__reaction">
                        <i className="bx bx-show"></i>
                        <span>356,7k</span>
                      </div>
                    </div>
                  </div>
    
                  <div className="blog__data">
                    <h2 className="blog__title">Did you know that coffee is the second most consumed drink after water?</h2>
                    <p className="blog__description">
                        Coffee, with its enticing aroma and comforting flavor, holds a prominent place in the daily routines of millions 
                        of people worldwide. Known as the second most consumed beverage after water, coffee has transcended borders and 
                        cultures, becoming an essential element for many. Its popularity lies in its ability to provide a boost of energy
                        and mental clarity, as well as serving as a social gathering point in cafes and homes alike. From the mountains 
                        of Latin America to the streets of Europe and beyond, coffee brings people together in a shared experience of 
                        pleasure and vitality.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </section>

        );

 }


 export default Blog;