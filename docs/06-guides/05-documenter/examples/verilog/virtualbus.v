module virtualbus (

    //! @virtualbus 
    //! tdata of stream
    input [7:0] m00_tdata,
    //! valid of stream
    input   m00_tvalid,
    //! id of current message
    input [3:0] m00_tid,
    //! destination of packet
    input [3:0] m00_tdest,
    output reg m00_tready,//! this device is ready to receive
    //! @end

    //! @virtualbus m01_axi4_stream 
    //! tdata of stream
    input [7:0] m01_tdata,
    //! valid of stream
    input   m01_tvalid,
    //! id of current message
    input [3:0] m01_tid,
    //! destination of packet
    input [3:0] m01_tdest,
    //! this device is ready to receive
    output reg m01_tready,
    //! @end


    input clk,
    input rstn
);

endmodule