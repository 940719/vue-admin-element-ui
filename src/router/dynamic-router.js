// /* 订单管理 */
// const Order = () => import('@/views/order-manage')
// const OrderList = () => import('@/views/order-manage/order-list')
// const ProductManage = () => import('@/views/order-manage/product-manage')
// const ProductionList = () =>
//     import('@/views/order-manage/product-manage/production-list')
// const ReviewManage = () =>
//     import('@/views/order-manage/product-manage/review-manage')
// const ReturnGoods = () => import('@/views/order-manage/return-goods')

// /* 产品管理 */
// const Goods = () => import('@/views/goods-manage')
// const GoodsList = () => import('@/views/goods-manage/goods-list')
// const GoodsClassify = () => import('@/views/goods-manage/goods-classify')
// // 权限管理
// const Permission = () => import('@/views/permission')
// const UserManage = () => import('@/views/permission/user-manage')
// const RoleManage = () => import('@/views/permission/role-manage')
// const MenuManage = () => import('@/views/permission/menu-manage')
/* 需要权限判断的路由 */
const dynamicRoutes = [
    // {
    //     path: '/order',
    //     component: Order,
    //     name: 'order-manage',
    //     meta: {
    //         name: '订单管理',
    //         icon: 'example'
    //     },
    //     children: [
    //         {
    //             path: 'list',
    //             name: 'order-list',
    //             component: OrderList,
    //             meta: {
    //                 name: '订单列表',
    //                 icon: 'table'
    //             }
    //         },
    //         {
    //             path: 'product',
    //             name: 'product-manage',
    //             component: ProductManage,
    //             meta: {
    //                 name: '生产管理',
    //                 icon: 'user'
    //             },
    //             children: [
    //                 {
    //                     path: 'list',
    //                     name: 'product-list',
    //                     component: ProductionList,
    //                     meta: {
    //                         name: '生产列表',
    //                         icon: 'table'
    //                     }
    //                 },
    //                 {
    //                     path: 'review',
    //                     name: 'review-manage',
    //                     component: ReviewManage,
    //                     meta: {
    //                         name: '审核管理',
    //                         icon: 'eye'
    //                     }
    //                 }
    //             ]
    //         },
    //         {
    //             path: 'returnGoods',
    //             name: 'return-goods',
    //             component: ReturnGoods,
    //             meta: {
    //                 name: '退货管理',
    //                 icon: 'nested'
    //             }
    //         }
    //     ]
    // },
    // {
    //     path: '/goods',
    //     component: Goods,
    //     name: 'goods',
    //     meta: {
    //         name: '产品管理',
    //         icon: 'user'
    //     },
    //     children: [
    //         {
    //             path: 'list',
    //             name: 'goods-list',
    //             component: GoodsList,
    //             meta: {
    //                 name: '产品列表',
    //                 icon: 'table'
    //             }
    //         },
    //         {
    //             path: 'classify',
    //             name: 'goods-classify',
    //             component: GoodsClassify,
    //             meta: {
    //                 name: '产品分类',
    //                 icon: 'tree'
    //             }
    //         }
    //     ]
    // },
    // {
    //     path: '/permission',
    //     component: Permission,
    //     name: 'permission',
    //     meta: {
    //         name: '权限管理',
    //         icon: 'table'
    //     },
    //     children: [
    //         {
    //             path: 'user',
    //             name: 'user-manage',
    //             component: UserManage,
    //             meta: {
    //                 name: '用户管理',
    //                 icon: 'table'
    //             }
    //         },
    //         {
    //             path: 'role',
    //             name: 'role-manage',
    //             component: RoleManage,
    //             meta: {
    //                 name: '角色管理',
    //                 icon: 'eye'
    //             }
    //         },
    //         {
    //             path: 'menu',
    //             name: 'menu-manage',
    //             component: MenuManage,
    //             meta: {
    //                 name: '菜单管理',
    //                 icon: 'tree'
    //             }
    //         }
    //     ]
    // }
]

export default dynamicRoutes
