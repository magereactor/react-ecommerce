import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL
} from "../constants/productConstants"

export const productListReducer = (state = {
    products: []
}, action) => {
    switch(action.type) {
        case PRODUCT_LIST_REQUEST:
            return {isLoading: true, products: []}

        case PRODUCT_LIST_SUCCESS:
            return {isLoading: false, products: action.payload}

        case PRODUCT_LIST_FAIL:
            return {isLoading: false, error: action.payload}

        default:
            return state
    }
}


export const productDetailsReducer = (state = {
    product: {
        reviews: []
    }
}, action) => {
    switch(action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return {isLoading: true, ...state}

        case PRODUCT_DETAILS_SUCCESS:
            return {isLoading: false, product: action.payload}

        case PRODUCT_DETAILS_FAIL:
            return {isLoading: false, error: action.payload}

        default:
            return state
    }
}