import { useDispatch, useSelector } from "react-redux";
import { $api } from "../../app/config/api";
import { Layout } from "../../templates/Layout/Layout";
import classes from "./MainPage.module.css"
import { useEffect } from "react";
import { getProductsService } from "../../app/store/model/services/products/getProductsService";
import { getProducts, getProductsLoading } from "../../app/store/model/selectors/product/productSelectors";
import { ProductCard } from "../../molecules/ProductCard/ProductCard";
import { Skeleton } from 'primereact/skeleton';

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

  useEffect(() => {
    dispatch(getProductsService());
  }, [dispatch])

  return (
    <div className={classes.MainPage}>
      <Layout>
        <h1>Products</h1>
        <div className={classes.products}>
          {products?.map((product) => {
            return (
              <ProductCard key={product.id} product={product} />
            )
          })}
          {productsLoading && (
            <>
              <Skeleton width="300px" height="566px"/>
              <Skeleton width="300px" height="566px"/>
              <Skeleton width="300px" height="566px"/>
              <Skeleton width="300px" height="566px"/>
              <Skeleton width="300px" height="566px"/>
              <Skeleton width="300px" height="566px"/>
            </>
          )}
        </div>
      </Layout>
    </div>
  );
};

export { MainPage }