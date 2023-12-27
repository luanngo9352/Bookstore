import asyncHandler from "../middleware/asyncHandler.js"
import Product from "../models/productModel.js";

// @desc     Fetch all products
// @route    Get api/products
// @access   Public
const getProducts = asyncHandler(async (req, res) => {
    const pageSize = process.env.PAGINATION_LIMIT;
    const page = Number(req.query.pageNumber) || 1;

    //Search filter
    const keyword = req.query.keyword
      ? { bookName: { $regex: req.query.keyword, $options: 'i' } }
      : {};
    //Category filter
    const category = req.query.category
      ? { category: { $regex: req.query.category, $options: 'i' } }
      : {};
    //Public Company filter
    const publicCompany = req.query.publicCompany
    ? { publicCompany: { $regex: req.query.publicCompany, $options: 'i' } }
    : {};
    //Author filter
    const author = req.query.author
    ? { author: { $regex: req.query.author, $options: 'i' } }
    : {};
    
    const count = await Product.countDocuments({...keyword,...category,...publicCompany,...author });
    const products = await Product.find({...keyword,...category,...publicCompany,...author })
      .limit(pageSize)
      .skip(pageSize * (page - 1));
  
    res.json({ products, page, pages: Math.ceil(count / pageSize) });
  });

// @desc     Fetch a product
// @route    Get /api/products/:id
// @access   Public

const getProductById = asyncHandler (async (req, res)=> {
    const products = await Product.findById(req.params.id);
    
    if(products) {
        return res.json(products);
    } else {
        res.status(404);
        throw new Error('Resource not found');
    }
});

// @desc     Create a product
// @route    POST /api/products
// @access   Private/Admin
const createProduct = asyncHandler (async (req, res)=> {
    const product = new Product({
        bookName: 'Sample name',
        user: req.user._id,
        category: 'Sample category',
        author: 'Sample author',
        publicCompany: 'Sample public company',
        language: 'Sample language',
        form: 'Sample form',
        pageNumber: 0,
        bookPrice: 0,
        bookDetail: 'Sample description',
        bookImage: '/images/sample.jpg',
        bookQuaranty: 0,
    })

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
});

// @desc     Update a product
// @route    PUT /api/products/:id
// @access   Private/Admin
const updateProduct = asyncHandler (async (req, res)=> {
    const {bookName, bookPrice, bookDetail, bookImage, author,
        category, publicCompany, bookQuaranty, language, form, pageNumber } = req.body;

    const product = await Product.findById(req.params.id);

    if(product) {
        product.bookName = bookName;
        product.bookPrice = bookPrice;
        product.bookDetail = bookDetail;
        product.bookImage = bookImage;
        product.author = author;
        product.category = category;
        product.publicCompany = publicCompany;
        product.bookQuaranty = bookQuaranty;
        product.language = language;
        product.form = form;
        product.pageNumber = pageNumber;

        const updatedProduct = await product.save();
        res.json(updatedProduct);
    } else {
        res.status(404);
        throw new Error('Resource not found');
    }
});

// @desc     Delete a product
// @route    DELETE /api/products/:id
// @access   Private/Admin
const deleteProduct = asyncHandler (async (req, res)=> {
    const product = await Product.findById(req.params.id);

    if(product) {
        await Product.deleteOne({_id: product._id});
        res.status(200).json({ message: 'Product deleted' });
    } else {
        res.status(404);
        throw new Error('Resource not found');
    }
});

// @desc    Create new review
// @route   POST /api/products/:id/reviews
// @access  Private
const createProductReview = asyncHandler(async (req, res) => {
    const { rating, comment } = req.body;
  
    const product = await Product.findById(req.params.id);
  
    if (product) {
      const alreadyReviewed = product.reviews.find(
        (r) => r.user.toString() === req.user._id.toString()
      );
  
      if (alreadyReviewed) {
        res.status(400);
        throw new Error('Product already reviewed');
      }
  
      const review = {
        name: req.user.name,
        rating: Number(rating),
        comment,
        user: req.user._id,
      };
  
      product.reviews.push(review);
  
      product.numReviews = product.reviews.length;
  
      product.rating =
        product.reviews.reduce((acc, item) => item.rating + acc, 0) /
        product.reviews.length;
  
      await product.save();
      res.status(201).json({ message: 'Review added' });
    } else {
      res.status(404);
      throw new Error('Product not found');
    }
});

// @desc    Get top rated products
// @route   GET /api/products/top
// @access  Public
const getTopProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({}).sort({ rating: -1 }).limit(3);
    res.status(200).json(products);
  });

// @desc    Get products in price range
// @route   GET /api/products/priceRange
// @access  Public
  const getProductsInPriceRange = asyncHandler(async (req, res) => {
    const { minPrice, maxPrice } = req.body;
  
    const products = await Product.find({
      bookPrice: { $gte: minPrice, $lte: maxPrice },
    });
    console.log(products)
    if(products) {
      return res.json(products);
    } else {
        res.status(404);
        throw new Error('Resource not found');
    }
  });

// @desc     Fetch all products
// @route    Get api/products
// @access   Public
const getProducts1 = asyncHandler (async (req, res)=> {
  const products = await Product.find({});
  res.json(products);
});

export { 
    getProducts, 
    getProductById, 
    createProduct, 
    updateProduct, 
    deleteProduct,
    createProductReview,
    getTopProducts,
    getProducts1,
    getProductsInPriceRange,
};