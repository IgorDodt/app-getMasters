export default{
    port: process.env.PORT || 3001,
    secretKey: process.env.SECRETKEY || '5d9f7c30-3273-4aa1-9c6e-03adc3eda88a',
    publicRoutes:process.env.PUBLICROUTES || [
        'users/create',
        'users/auth',
        'customer/create'
    ]
}