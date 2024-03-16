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
import { useCartLocalStorage } from "../../app/shared/hooks/useCartLocalStorage";
import { cartActions } from "../../app/store/model/slices/cartSlice";
import { InputText } from "primereact/inputtext";
import classNames from "classnames";
import { getSearchProductsService } from "../../app/store/model/services/products/getSearchProducts";
import { useDebounce } from "../../app/hooks/useDebounce";


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
  const { cart } = useCartLocalStorage();
  const [search, setSearch] = useState("");
 
 
  useDebounce(search, () => {
    if(search.length) {
      dispatch(getSearchProductsService(search));
    } else {
      dispatch(getProductsService({
        page: page + 1,
        limit: 20,
      }));
    }
  })


  useEffect(() => {
    dispatch(getProductsService({
      page: page + 1,
      limit: 20,
    }));
  }, [dispatch, page])

  useEffect(() => {
    if (cart.length) {
      dispatch(cartActions.setCart(cart))
    }
  }, [dispatch, cart])

  const onPageChange = (event) => {
    setPage(event.page);
    setFirst(event.first);
  };

  return (
    <div className={classes.MainPage}>
      <Layout>
        <>
          <span className={classNames('p-input-icon-left', classes.search)}>
            <i className="pi pi-search" />
            <InputText
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </span>
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
        </>
      </Layout>
    </div>
  );
};

export { MainPage }