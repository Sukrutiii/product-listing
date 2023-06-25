import React, { useEffect, useState } from 'react'
import './ProductCardMobile.css'
import Logo from '../../../assets/advertiseImage.png'
import { FaRegCommentDots } from 'react-icons/fa'
import { RiArrowDropUpLine } from 'react-icons/ri'
import { BiCommentDetail } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import Loading from '../../loading/Loading'
import { UpVoteProductRedux, AddComment } from '../../../features/productSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'
import EditProductMobilePopUp from '../../pop-ups/editProduct/EditProductMobilePopUp'

function ProductCardMobile({ product }) {

  // Redux

  const user = useSelector(state => state.user);
  const category = useSelector((state) => state.product.category);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  // Comments

  const [commentOn, setCommentOn] = useState(false);
  const [comments, setComments] = useState(product.comments);
  const [commentData, setCommentData] = useState('')

  // Upvotes
  const [upVotes, setUpvotes] = useState(product.upVotes_id);
  console.log(product.upVotes_id);

  const handleChange = (event) => {
    setCommentData(event.target.value);
  };

  const handleKeyDown = async (event) => {
    if (event.key === 'Enter') {
      if (user.login) {
        const token = localStorage.getItem('token')
        try {
          await axios.post('https://product-listing-40mx.onrender.com/product/comment', {
            id: product._id,
            comment: commentData
          }, {
            headers: {
              'Authorization': token
            }
          })
          dispatch(AddComment({ id: product._id, comment: commentData }))
          setComments([...comments, commentData]);
          setCommentData('');
        } catch (e) {
          console.log(e);
        }
      }
      else {
        toast.error(<div>
          <p>Login First to Upvote</p>
          <button className='login__button'
            onClick={() => navigate('/login')}
          >Login</button>
        </div>, {
          position: toast.POSITION.TOP_CENTER
        });
      }
    }
  };

  const upVoteProduct = async () => {
    setLoading(true);
    if (user.login) {
      const token = localStorage.getItem('token')
      await axios.post("https://product-listing-40mx.onrender.com/product/upvote", {
        id: product._id
      }, {
        headers: {
          'Authorization': token
        }
      })
      let flag = false;
      for (let i = 0; i < upVotes.length; i++) {
        if (upVotes[i] === user.id) {
          flag = true
        }
      }
      if (flag) {
        let index = 0;
        for (let i = 0; i < upVotes.length; i++) {
          if (upVotes[i] === user.id) {
            index = i;
          }
        }
        setUpvotes([
          ...upVotes.slice(0, index),
          ...upVotes.slice(index + 1, upVotes.length)
        ]);
      }
      else {
        setUpvotes([...upVotes, user.id])
      }
      dispatch(UpVoteProductRedux({ id: product._id, userid: user.id }));
    }
    else {
      toast.error(<div>
        <p>Login First to Upvote</p>
        <button className='login__button'
          onClick={() => navigate('/login')}
        >Login</button>
      </div>, {
        position: toast.POSITION.BOTTOM_CENTER
      });
    }
    setLoading(false);
  }

  useEffect(() => {
    setComments(product.comments);
    setUpvotes(product.upVotes_id);
  }, [product])

  return (
    <>
      {
        (product.tag === category || category === 'All') ? <><div className="product__card__container__mb" key={product._id}>
          <img src={Logo} alt="" className="product__card__logo__mb" />
          <div className="product__card__details__mb">
            <p className='product__name__mb'>{product.name}</p>
            <p className="product__description__mb">{product.description}</p>
            <div className="product__tag__comment__mb">
              <p className="product__tag__mb">{product.tag}</p>
              <p className="product__comment__mb" onClick={() => setCommentOn(!commentOn)}> <FaRegCommentDots /></p>
              {
                (product.user_id===user.id) ?<EditProductMobilePopUp name={product.name} description={product.description} tag={product.tag} id={product._id} /> :<div/>
              }
            </div>
          </div>
          
          <div className="product__upvote__mb">
            {
              (upVotes.includes(user.id)) ?

                (loading) ? <div className='upvote__loading__mb'><Loading /></div> : <div className="upvotedone__mb" onClick={upVoteProduct}><RiArrowDropUpLine />
                  <p>{upVotes.length}</p> </div>

                :

                (loading) ? <div className='upvote__loading__mb'><Loading /></div> : <div className="upvote__mb" onClick={upVoteProduct}><RiArrowDropUpLine />
                  <p>{upVotes.length}</p> </div>



            }
            <p>{comments.length} <BiCommentDetail /></p>
          </div>
        </div>
          {
            (commentOn) ? <div className="comment__box__mb">
              <div className="add__comment__container__mb">
                <input type="text" name='comment' value={commentData}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown} />
              </div>
              {
                comments.map((e) => <li style={{ textAlign: "start", marginLeft: "20px", marginBottom: "20px" }}>{e}</li>)
              }
            </div> : <div />
          }</> : <div />
      }


    </>
  )
}

export default ProductCardMobile