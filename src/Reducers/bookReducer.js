export const initialState = {
    books: [],
}




export const bookReducer = (state, action) => {

    const { type, payload } = action


    switch (type) {


        case "CREATEBOOK": {


            return {
                ...state,

                books: payload.book
            }


        }
        case "EDITBOOK": {


            return {
                ...state,

                books: payload.book
            }


        }

        case "DELETEBOOK": {


            return {
                ...state,

                books: payload.book
            }


        }


        default:
            return state
    }
}