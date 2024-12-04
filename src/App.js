import { Route, Routes, Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import Dashboard from './componant/Dashboard';
import Navbar from './componant/Navbar';
import Categories from './componant/Categories';
import Login from './componant/Login';
import CreateCategories from './componant/create/CreateCategories';
import Product from './componant/Product';
import CreateProduct from './componant/create/CreateProduct';
import Customer from './componant/Customer';
import DeliveryBoys from './componant/DeliveryBoys';
import Subscription from './componant/Subscription';
import DeliveryBoyWallet from './componant/DeliveryBoyWallet';
import StockHistory from './componant/StockHistory';
import CreateCustomer from './componant/create/CreateCustomer';
import Order from './componant/Order';
import PaymentTransactionHistory from './componant/PaymentTransactionHistory';
import IncomeReport from './componant/IncomeReport';
import Pincode from './componant/Pincode';
import CreatePincode from './componant/create/CreatePincode';
import City from './componant/City';
import CreateCity from './componant/create/CreateCity';
import Area from './componant/Area';
import CreateArea from './componant/create/CreateArea';
import EditCustomer from './componant/edit/EditCustomer';
import CreateDeliveryBoy from './componant/create/CreateDeliveryBoy';
import EditProduct from './componant/edit/EditProduct';
import EditPincode from './componant/edit/EditPincode';
import EditCity from './componant/edit/EditCity';
import EditArea from './componant/edit/EditArea';
import EditDelilveryBoy from './componant/edit/EditDelilveryBoy';
import EditCategories from './componant/edit/EditCategories';
import Stock from './componant/Stock';
import CreateOrder from './componant/create/CreateOrder';
import EditOrder from './componant/edit/EditOrder';
import CreateStock from './componant/create/CreateStock';
import EditStock from './componant/edit/EditStock';
import TokenState from './context/token/TokenState';
import Society from './componant/Society';
import CreateSociety from './componant/create/CreateSociety';
import EditSociety from './componant/edit/EditSociety';
import CashCollection from './componant/CashCollection';
import DeliveryBoyReporting from './componant/DeliveryBoyReporting';
import CreateSubscription from './componant/create/CreateSubscription';
import EditSubscription from './componant/edit/EditSubscription';
import OtherProductOrder from './componant/OtherProductOrder';
import CreateOtherProductOrder from './componant/create/CreateOtherProductOrder';
import EditOtherProductOrder from './componant/edit/EditOtherProductOrder';
import SubscriptionOrders from './componant/SubscriptionOrders';
import CreateSubscriptionOrders from './componant/create/CreateSubscriptionOrders';
import EditSubscriptionOrders from './componant/edit/EditSubscriptionOrders';
import ReportingDatewise from './componant/ReportingDatewise';
import CreateReportingDatewise from './componant/create/CreateReportingDatewise';
import EditReportingDatewise from './componant/edit/EditReportingDatewise';



function App() {
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  }
  const adminCookie = getCookie('admin');
  const adminData = adminCookie ? JSON.parse(decodeURIComponent(adminCookie)) : null;
  const token = adminData ? `Bearer ${adminData.token}` : null;

  const PrivateRoute = ({ element }) => {
    if (!adminData) {
      return <Navigate to="/login" />;
    }
    return element;
  };


  const location = useLocation();

  return (
    <>
      {adminData && location.pathname !== '/login' ? (
        <Navbar />
      ) : null}

      <TokenState>
        <Routes>
          <Route path="/" element={<PrivateRoute element={<Dashboard />} />} />
          <Route path="/category" element={<PrivateRoute element={<Categories />} />} />
          <Route path='/products' element={<PrivateRoute element={<Product />} />} />
          <Route path='/customer' element={<PrivateRoute element={<Customer />} />} />
          <Route path='/delivery-boy' element={<PrivateRoute element={<DeliveryBoys />} />} />
          <Route path='/subscription' element={<PrivateRoute element={<Subscription />} />} />
          <Route path='/delivery-boy-wallet' element={<PrivateRoute element={<DeliveryBoyWallet />} />} />
          <Route path='/stock-history' element={<PrivateRoute element={<StockHistory />} />} />
          <Route path='/order' element={<PrivateRoute element={<Order />} />} />
          <Route path='/paymenttransactionHistory' element={<PrivateRoute element={<PaymentTransactionHistory />} />} />
          <Route path='/income-report' element={<PrivateRoute element={<IncomeReport />} />} />
          <Route path='/pincode' element={<PrivateRoute element={<Pincode />} />} />
          <Route path='/city' element={<PrivateRoute element={<City />} />} />
          <Route path='/area' element={<PrivateRoute element={<Area />} />} />
          <Route path='/stock' element={<PrivateRoute element={<Stock />} />} />
          <Route path='/society' element={<PrivateRoute element={<Society />} />} />
          <Route path='/cash-collection' element={<PrivateRoute element={<CashCollection />} />} />
          <Route path='/delivery-boy-reporting' element={<PrivateRoute element={<DeliveryBoyReporting />} />} />
          <Route path='/other-product-order' element={<PrivateRoute element={<OtherProductOrder />} />} /> 
          <Route path='/subscription-orders' element={<PrivateRoute element={<SubscriptionOrders />} />} />
          <Route path='/reporting-datewise' element={<PrivateRoute element={<ReportingDatewise />} />} />



          <Route path='/create-category' element={<PrivateRoute element={<CreateCategories />} />} />
          <Route path='/create-products' element={<PrivateRoute element={<CreateProduct />} />} />
          <Route path='/create-customer' element={<PrivateRoute element={<CreateCustomer />} />} />
          <Route path='/create-pincode' element={<PrivateRoute element={<CreatePincode />} />} />
          <Route path='/create-city' element={<PrivateRoute element={<CreateCity />} />} />
          <Route path='/create-area' element={<PrivateRoute element={<CreateArea />} />} />
          <Route path='/create-delivery-boy' element={<PrivateRoute element={<CreateDeliveryBoy />} />} />
          <Route path='/create-order' element={<PrivateRoute element={<CreateOrder />} />} />
          <Route path='/create-stock' element={<PrivateRoute element={<CreateStock />} />} />
          <Route path='/create-society' element={<PrivateRoute element={<CreateSociety />} />} />
          <Route path='/create-subscription' element={<PrivateRoute element={<CreateSubscription />} />} />
          <Route path='/Create-Other-ProductOrder' element={<PrivateRoute element={<CreateOtherProductOrder />} />} />
          <Route path='/Create-Subscription-Orders' element={<PrivateRoute element={<CreateSubscriptionOrders />} /> } />
          <Route path='/create-reportingdatewise' element={<PrivateRoute element={<CreateReportingDatewise />} />} />


          <Route path='/edit-customer/:id' element={<PrivateRoute element={<EditCustomer />} />} />
          <Route path='/edit-product/:id' element={<PrivateRoute element={<EditProduct />} />} />
          <Route path='/edit-pincode/:id' element={<PrivateRoute element={<EditPincode />} />} />
          <Route path='/edit-city/:id' element={<PrivateRoute element={<EditCity />} />} />
          <Route path='/edit-area/:id' element={<PrivateRoute element={<EditArea />} />} />
          <Route path='/edit-delivery-boy/:id' element={<PrivateRoute element={<EditDelilveryBoy />} />} />
          <Route path='/edit-category/:id' element={<PrivateRoute element={<EditCategories />} />} />
          <Route path='/edit-order/:id' element={<PrivateRoute element={<EditOrder />} />} />
          <Route path='/edit-stock/:id' element={<PrivateRoute element={<EditStock />} />} />
          <Route path='/edit-society/:id' element={<PrivateRoute element={<EditSociety />} />} />
          <Route path='/edit-subscription/:id' element={<PrivateRoute element={<EditSubscription />} />} />
          <Route path='/edit-otherproductorder/:id' element={<PrivateRoute element={<EditOtherProductOrder />} />} />
          <Route path='/edit-subscriptionorders/:id' element={<PrivateRoute element={<EditSubscriptionOrders />} />} />
          <Route path='/edit-reportingdatewise/:id' element={<PrivateRoute element={<EditReportingDatewise />} />} />

          <Route path='/login' element={<Login />} />
        </Routes>
      </TokenState>
    </>
  );
}

export default App;
