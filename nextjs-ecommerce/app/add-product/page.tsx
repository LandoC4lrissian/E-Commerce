export default function AddProductPage() {
  return (
    <div>
      <h1 className="text-lg mb-3 font-bold">Add Product</h1>
      <form>
        <input
          required
          name="name"
          placeholder="Name"
          className="mb-3 w-full input imput-bordered"
        />
        <textarea
          required
          name="description"
          placeholder="Description"
          className="textarea-bordered textarea mb-3 w-full"
        />
        <input
          required
          name="imageUrl"
          placeholder="Image URL"
          type="url"
          className="mb-3 w-full input imput-bordered"
        />
        <input
          required
          name="price"
          placeholder="Price"
          type="number"
          className="mb-3 w-full input imput-bordered"
        />
        <button className="btn btn-primary btn-block" type="submit">Add Product</button>
        
      </form>
    </div>
  );
}
