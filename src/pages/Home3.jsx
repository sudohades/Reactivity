 import React from 'react';
 import "./Home3.css";

 const Home3 = () => {
    return (
        <div className='homepage3'>
            {/* Hero section Here */}
            <section className="hero">
                <h1>Welcome to linux@linux</h1>
                <p>
                    A blog for curious minds who want to explore and learn about linux...from the basics to advanced tips & tricks.
                </p>
                <button className="explore-button">Start Exploring</button>
            </section>

            {/* blog preview section*/}
            <section className="blogPreview">
                <h2>
                    Latest Articles
                </h2>
                <div className="blog-cards">
                    <article className="blogCards">
                        <h3>
                            Understanding the linux file system
                        </h3>
                        <p>
                            Learn the hierarchy of the Linux file system, what each directory does, and why it matters.
                        </p>
                    </article>
                    <article className="blogCards">
                        <h3>
                            Top 10 Linux Commands for Beginners
                        </h3>
                        <p>
                            Get comfortable on the terminal with these essential commands every beginner should know.
                        </p>
                    </article>
                    <article>
                        <h3>
                            Customizing Your Linux Environment
                        </h3>
                        <p>
                            Make Linux truly yours by tweaking themes, shells, and configurations.
                        </p>
                    </article>
                </div>
            </section>
        </div>
    );
 };

 export default Home3;