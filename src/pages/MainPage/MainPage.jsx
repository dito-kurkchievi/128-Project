import { useDispatch, useSelector } from "react-redux";
import { $api } from "../../app/config/api";
import { Layout } from "../../templates/Layout/Layout";
import classes from "./MainPage.module.css"
import { useEffect, useState } from "react";
import { getProductsService } from "../../app/store/model/services/products/getProductsService";
import { getProducts, getProductsLoading, getProductsTotalCount } from "../../app/store/model/selectors/product/productSelectors";
import { ProductCard } from "../../molecules/ProductCard/ProductCard";
import { Skeleton } from 'primereact/skeleton';
import { Paginator } from 'primereact/paginator';


/*
  1xx - informational
  2xx - success
  3xx - redirect
  4xx - client error
  5xx - server error
*/


const MainPage = (props) => {
  const dispatch = useDispatch();
  const products = useSelector(getProducts);
  const productsLoading = useSelector(getProductsLoading);
  const [page, setPage] = useState(0);
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(20);
  const totalCount = useSelector(getProductsTotalCount);

  useEffect(() => {
    dispatch(getProductsService({
      page: page + 1,
      limit: 20,
    }));
  }, [dispatch, page])

  const onPageChange = (event) => {
    setPage(event.page);
    setFirst(event.first);
  };

  return (
    <div className={classes.MainPage}>
      <Layout>
        <h1>Products</h1>
        <div className={classes.products}>
          {!productsLoading && products?.map((product) => {
            return (
              <ProductCard key={product.id} product={product} />
            )
          })}
          {productsLoading && (
            <>
              <Skeleton width="300px" height="566px" />
              <Skeleton width="300px" height="566px" />
              <Skeleton width="300px" height="566px" />
              <Skeleton width="300px" height="566px" />
              <Skeleton width="300px" height="566px" />
              <Skeleton width="300px" height="566px" />
            </>
          )}
        </div>
        <Paginator
          first={first}
          rows={rows}
          totalRecords={totalCount}
          onPageChange={onPageChange}
        />
      </Layout>
    </div>
  );
};

export { MainPage }