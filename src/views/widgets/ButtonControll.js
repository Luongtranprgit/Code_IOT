// import { CCard, CCardBody, CRow, CCol, CButton, CContainer } from '@coreui/react'
// import React, { useEffect, useState } from 'react'
// import { cilLightbulb, cilAsteriskCircle, cilAsterisk } from '@coreui/icons'
// import CIcon from '@coreui/icons-react'
// const ButtonControll = () => {
//     const [l1, setL1] = useState()
//     const [l2, setL2] = useState()
//     const [l3, setL3] = useState()

//     let method;
//     useEffect(() => {
//         fetch(`http://localhost:3001/led/status`, {
//             method: "GET",
//         })
//             .then((response) => {
//                 if (response.ok) {
//                     return response.json()
//                 } else {
//                     alert.log('Lấy trạng thái đèn thất bại')
//                     return response.json()
//                 }
//             })
//             .then((data) => {
//                 setL1(data.led1);
//                 setL2(data.led2);
//                 setL3(data.led3);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//         return () => { }
//     }, [])
//     // console.log("re")
//     const Click = (id) => {
//         if (id === 1) {
//             method = l1 ? 'POST' : 'PUT';
//         } else if (id === 2) {
//             method = l2 ? 'POST' : 'PUT';
//         } else if (id === 3) {
//             method = l3 ? 'POST' : 'PUT';
//         }
//         fetch(`http://localhost:3001/led/${id}`, {
//             method: method,
//         })
//             .then((response) => {
//                 if (response.ok) {
//                     if (id === 1) {
//                         setL1(!l1)
//                     } else if (id === 2) {
//                         setL2(!l2)
//                     } else if (id === 3){
//                         setL3(!l3)
//                     }
//                 } else {
//                     alert.log('Tắt thất bại !')
//                 }
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     }
//     return (
//         <>
//             <CCard className="mb-4" style={{ height: '90%' }}>
//                 <CCol className="align-items-center">
//                     <CRow >
//                         {l1 ? (
//                             <CCol style={{ paddingTop: '22px' }}>
//                                 <p style={{ padding: '22px' }}>Điều khiển đèn</p>
//                                 <div className="d-grid gap-2 col-3 mx-auto ">
//                                     <CIcon icon={cilLightbulb} className="text-success" size="xxl" style={{ height: 'auto', width: 'auto' }} />
//                                 </div>
//                                 <div className="d-grid gap-2 col-3 mx-auto">
//                                     <CButton color="info" onClick={() => { Click(1) }}>ON </CButton>
//                                 </div>
//                             </CCol>) : (
//                             <CCol style={{ paddingTop: '22px' }}>
//                                 <p style={{ padding: '22px' }}>Điều khiển đèn</p>

//                                 <div className="d-grid gap-2 col-3 mx-auto ">
//                                     <CIcon icon={cilLightbulb} className="text-secondary" size="xxl" style={{ height: 'auto', width: 'auto' }} />
//                                 </div>
//                                 <div className="d-grid gap-2 col-3 mx-auto">
//                                     <CButton color="dark" onClick={() => { Click(1) }}>OFF</CButton>
//                                 </div>
//                             </CCol>
//                         )}
//                     </CRow>
//                     <CRow>
//                         {l2 ? (
//                             <CCol style={{ paddingTop: '22px' }}>
//                                 <p style={{ padding: '22px' }}>Điều khiển quạt</p>

//                                 <div className="d-grid gap-2 col-3 mx-auto ">
//                                     <CIcon icon={cilAsteriskCircle} className="text-danger" size="xxl" style={{ height: 'auto', width: 'auto' }} />
//                                 </div>
//                                 <div className="d-grid gap-2 col-3 mx-auto">
//                                     <CButton color="info" onClick={() => { Click(2) }}>ON </CButton>
//                                 </div>
//                             </CCol>) : (
//                             <CCol style={{ paddingTop: '22px' }}>
//                                 <p style={{ padding: '22px' }}>Điều khiển quạt</p>

//                                 <div className="d-grid gap-2 col-3 mx-auto ">
//                                     <CIcon icon={cilAsteriskCircle} className="text-secondary" size="xxl" style={{ height: 'auto', width: 'auto' }} />
//                                 </div>
//                                 <div className="d-grid gap-2 col-3 mx-auto">
//                                     <CButton color="dark" onClick={() => { Click(2) }}>OFF</CButton>
//                                 </div>
//                             </CCol>
//                         )}
//                     </CRow>
//                     <CRow>
//                         {l3 ? (
//                             <CCol style={{ paddingTop: '22px' }}>
//                                 <p style={{ padding: '22px' }}>Điều khiển điều hoà</p>

//                                 <div className="d-grid gap-2 col-3 mx-auto ">
//                                     <CIcon icon={cilAsterisk} className="text-info" size="xxl" style={{ height: 'auto', width: 'auto' }} />
//                                 </div>
//                                 <div className="d-grid gap-2 col-3 mx-auto">
//                                     <CButton color="info" onClick={() => { Click(3) }}>ON </CButton>
//                                 </div>
//                             </CCol>) : (
//                             <CCol style={{ paddingTop: '22px' }}>
//                                 <p style={{ padding: '22px' }}>Điều khiển điều hoà</p>

//                                 <div className="d-grid gap-2 col-3 mx-auto ">
//                                     <CIcon icon={cilAsterisk} className="text-secondary" size="xxl" style={{ height: 'auto', width: 'auto' }} />
//                                 </div>
//                                 <div className="d-grid gap-2 col-3 mx-auto">
//                                     <CButton color="dark" onClick={() => { Click(3) }}>OFF</CButton>
//                                 </div>
//                             </CCol>
//                         )}
//                     </CRow>
//                 </CCol>
//             </CCard >
//         </>
//     )
// }
// export default ButtonControll
