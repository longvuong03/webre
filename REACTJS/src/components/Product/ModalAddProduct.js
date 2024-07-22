import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { postCreateProduct } from '../../services/ProductService'; // Import the product service
import { toast } from 'react-toastify';

const ModalAddProduct = (props) => {
    const { show, handleClose, handleUpdateTable } = props;
    const [img, setImg] = useState('');
    const [nameProduct, setNameProduct] = useState('');
    const [price, setPrice] = useState('');

    const handleSave = async () => {
        console.log(img, nameProduct, price);
        let res = await postCreateProduct(img, nameProduct, price); // Call the product service
        console.log(res);
        if (res && res.id) {
            handleClose();
            setImg('');
            setNameProduct('');
            setPrice('');
            toast.success("Create product successfully");
            handleUpdateTable({
                id: res.id,
                img: res.img,
                nameProduct: res.nameProduct,
                price: res.price
            });
        } else {
            toast.error("Create product failed");
        }
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="body-add-new">
                        <form>
                           
                            <div className="form-group">
                                <label className="form-label">Image URL</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Image URL"
                                    value={img}
                                    onChange={(e) => setImg(e.target.value)} 
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Name</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Product Name"
                                    value={nameProduct}
                                    onChange={(e) => setNameProduct(e.target.value)} 
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Price</label>
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    placeholder="Price"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)} 
                                />
                            </div>
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalAddProduct;
