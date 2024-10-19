//! @title mymodule design
//! @author terosHDL
module mymodule #(
    parameter PARAM1 = 1024 //! number of bytes in fifo
)(
    output reg [PARAM1-1:0] data, 
    input clk, //! 300Mhz Clock
    input rstn
);
    
endmodule