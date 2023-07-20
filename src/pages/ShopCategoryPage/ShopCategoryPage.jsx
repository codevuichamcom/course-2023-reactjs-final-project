import { Col, Container, Input, Row } from "reactstrap";
import { BannerPath, ProductList, SelectBoxCustom } from "src/components";
import "./ShopCategoryPage.css";
import { RadioList } from "./components";
import { useEffect, useState } from "react";
import { axiosClient } from "src/axios/AxiosClient";

export const ShopCategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [colors, setColors] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data: categories } = await axiosClient.get("/categories");
      setCategories(categories);
      const { data: brands } = await axiosClient.get("/brands");
      setBrands(brands);
      const { data: colors } = await axiosClient.get("/colors");
      setColors(colors);
    };
    fetchData();
  }, []);
  return (
    <>
      <main className="shop-category-page__main">
        <BannerPath title="Shop Category" path="Home - Shop Category" />
        <Container className="shop-category-page__container">
          <Row>
            <Col md="5" lg="4" xl="3">
              <div className="sidebar">
                <div className="sidebar__header">Browse Categories</div>
                <div className="sidebar__main">
                  <RadioList data={categories} />
                </div>
              </div>
              <div className="sidebar mt-4">
                <div className="sidebar__header">Product Filter</div>
                <div className="sidebar__main">
                  <div className="sidebar__title">Brands</div>
                  <RadioList data={brands} />
                </div>
                <div className="sidebar__main">
                  <div className="sidebar__title">Colors</div>
                  <RadioList data={colors} />
                </div>
                <div className="sidebar__main">
                  <div className="sidebar__title">Price</div>
                  <div className="sidebar__range">
                    <Input
                      className="sidebar__range__from"
                      placeholder="From"
                    />
                    <Input
                      className="sidebar__range__to ms-2"
                      placeholder="To"
                    />
                  </div>
                </div>
              </div>
            </Col>
            <Col md="7" lg="8" xl="9">
              <div className="filter-bar d-flex align-items-center flex-wrap">
                <SelectBoxCustom
                  className="filter-bar__sort w-25"
                  data={[{ key: 1, value: "Quan" }]}
                  onSelectBoxChange={(value) => console.log(value)}
                />
                <SelectBoxCustom
                  className="w-25 ms-3 me-auto"
                  data={[{ key: 1, value: "Quan" }]}
                  onSelectBoxChange={(value) => console.log(value)}
                />
                <Input
                  className="filter-bar__search"
                  bsSize="sm"
                  type="search"
                  placeholder="Search here..."
                />
              </div>
              <ProductList xl="3" />
            </Col>
          </Row>
        </Container>
        <ProductList md="4" lg="6" xl="6" />
      </main>
    </>
  );
};
