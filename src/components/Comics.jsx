// import Comics from "../data/comics"

const Comics = (comicsProps) => {

    const { mainComics } = comicsProps

    return (


        <div >{

            mainComics.map(comic => {

                const { id, title, thumb, price } = comic

                // task qui si dovrebbe trovare la card contenente tutto il fumetto
                return (
                    <div key={id} className="card" >
                        <figure >
                            <img src={thumb} alt={title} />
                        </figure>
                        <h6>{title}</h6>
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