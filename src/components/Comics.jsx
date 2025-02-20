// import Comics from "../data/comics"

const Comics = (comicsProps) => {

    const { mainComics } = comicsProps

    return (


        <div className="comicShelf" >{

            mainComics.map(comic => {

                //* destructuring
                const { id, title, thumb, price } = comic

                // task card contenente il fumetto
                return (
                    <div key={id} className="card" >
                        <figure >
                            <img src={thumb} alt={title} />
                        </figure>
                        <h4>{title}</h4>
                        <p>{price}</p>
                    </div >
                )

            }
            )

        }

        </div >

    )
}

export default Comics