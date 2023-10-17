import { useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

function NewTicket() {
  const { user } = useSelector((state) => state.auth);
  const [name] = useState(user.name);
  const [email] = useState(user.email);
  const [product, setProduct] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className='heading'>
        <h1>New Ticket</h1>
        <p>Please fill out the form below</p>
      </section>

      <section className='form'>
        <div className='form-group'>
          <label htmlFor='name'>Costumer Name</label>
          <input type='text' className='form-controll' value={name} disabled />
        </div>

        <div className='form-group'>
          <label htmlFor='name'>Costumer Email</label>
          <input type='text' className='form-controll' value={email} disabled />
        </div>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label htmlFor='product'>Product</label>
            <select
              name='product'
              id='product'
              value={product}
              onChange={(e) => setProduct(e.target.value)}>
              <option value='iPhone'>iPhone</option>
              <option value='MacBook Pro'>Macbook Pro</option>
              <option value='iMac'>iMac</option>
              <option value='iPad'>iPad</option>
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor='description'>Description of the issue</label>
            <textarea
              name='description'
              id='description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}></textarea>
          </div>
          <div className='form-group'>
            <button className='btn btn-block'>Submit</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default NewTicket;
