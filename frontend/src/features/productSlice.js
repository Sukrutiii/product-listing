import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    originalProducts:[],
    productList:[],
    getProducts:false,
    feature:'comment',
    category:'All',
    suggestions:0
}

const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
        AddProducts:(state,action)=>{
            state.productList = action.payload.productsData;  
            state.getProducts =action.payload.getProducts; 
        },
        AddProduct:(state,action)=>{
            const temp = state.productList.slice();
            temp.push(action.payload.product);
            state.productList = temp;
        },
        EditProduct:(state,action)=>{
            const name = action.payload.name;
            const description = action.payload.description;
            const tag = action.payload.tag;
            const id = action.payload.id;
            let temp = state.productList;
            for(let i = 0;i<temp.length;i++){
                if(temp[i]._id===id){
                    temp[i].name = name;
                    temp[i].description = description;
                    temp[i].tag = tag;
                    console.log("dsafvf");
                }
            }
            state.productList = temp;

        },
        AddComment:(state,action)=>{
            const comment = action.payload.comment;
            const id = action.payload.id;
            let temp = state.productList.slice();
            for(let i = 0;i<temp.length;i++){
                if(temp[i]._id===id){
                    temp[i].comments.push(comment);
                }
            }
            state.productList = temp;
        },
        SortByComment:(state,action)=>{
            const feature = action.payload.feature;
            state.feature = feature;
        },
        SetCategory:(state,action)=>{
            const category = action.payload.category;
            state.category = category;
        },
        UpVoteProductRedux:(state,action)=>{
            const id = action.payload.id;
            const userid = action.payload.userid;
            let temp = state.productList;
            for(let i = 0;i<temp.length;i++){
                if(temp[i]._id===id){
                    if(temp[i].upVotes_id.includes(userid)){
                        temp[i].upVotes_id=temp[i].upVotes_id.filter((upvote)=>upvote!==userid).slice();
                    }
                    else{
                        temp[i].upVotes_id.push(userid);
                    }
                }
            }
            state.productList = temp;
        },
        SetSuggestions:(state,action)=>{
            const count = action.payload.count;
            state.suggestions = count;
        }
    }
})


export const {AddProducts,AddProduct,AddComment,SortByComment,UpVoteProductRedux,SetCategory,SetSuggestions,EditProduct} = productSlice.actions; 

export default productSlice.reducer;