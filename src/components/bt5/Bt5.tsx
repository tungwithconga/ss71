import { CopyOutlined, DashboardOutlined, DollarOutlined, FundOutlined, LeftOutlined, UserOutlined } from '@ant-design/icons'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { toggleBt5 } from '../../store/reducers/Bt5Reducer'

export default function Bt5() {
    const bt5State = useSelector((state: RootState) => state.bt5)
    const dispatch = useDispatch()
  return (
    <>
        <div>
            <div><DashboardOutlined />{bt5State?"bảng điều khiển":""}</div>
            <div><UserOutlined />{bt5State?"tài khoản":""}</div>
            <div><DollarOutlined />{bt5State?"tài sản":""}</div>
            <div><FundOutlined />{bt5State?"thống kê":""}</div>
            <div><CopyOutlined />{bt5State?"tài liệu":""}</div>
            <div onClick={()=>dispatch(toggleBt5())}><LeftOutlined />{bt5State?"thu gọn":""}</div>
        </div>
    </>
  )
}
